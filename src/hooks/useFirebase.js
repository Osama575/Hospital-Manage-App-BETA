import { useEffect, useState } from "react"
import initializeAuthentication from '../firebase/firebase.init'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
initializeAuthentication()

const auth = getAuth()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  const [userRole, setUserRole] = useState('')

  //login user
  const signInUser = (email, password, location, navigate) => {
    setisLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        setError('')
        setSuccess(true)
        navigate('/dashboard' || location.state.from)
      })
      .catch(error => {
        setError(error.message)
        setSuccess(false)
      })
      .finally(setisLoading(false))
  }

  //get current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        setError('')
        getUserRole(user)
      } else {
        setUser({})
      }
      setisLoading(false)
    })
    return () => unSubscribe;
  }, [])

  //sing out user
  const singOutUser = () => {
    setisLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
        setError('')
        setUserRole('')
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(setisLoading(false))
  }

  // set role
  const getUserRole = (user) => {
    fetch('/user.json')
      .then(res => res.json())
      .then(data => {
        const findUser = data.find(singleUser => singleUser.email === user.email)
        setUserRole(findUser.role)
      })
  }

  return {
    user,
    error,
    success,
    signInUser,
    singOutUser,
    isLoading,
    userRole
  }
}

export default useFirebase;