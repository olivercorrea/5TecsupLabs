import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { database } from '../database/firebase'
import { QuerySnapshot, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Usuarios from './Usuarios'

const UsersList = () => {
  
const [users, setUsers] = useState([])

useEffect( () => {
  const collectionRef = collection(database, 'usuarios')
  const q = query(collectionRef, orderBy('name','desc'))

  const unsuscribe = onSnapshot(q, querySnapshot => {
    setUsers(
      querySnapshot.docs.map(doc => ({
        id: doc.id,
        email: doc.data().email,
        name: doc.data().name,
        phone: doc.data().phone
      })
      )
    )
  })
  return unsuscribe
}, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>
      {users.map(usuario => <Usuarios key={usuario.id} {...usuario}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default UsersList