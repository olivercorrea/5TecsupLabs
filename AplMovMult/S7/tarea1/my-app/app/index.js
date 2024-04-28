import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
const API = () => {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    const options = {
      headers: {
        'X-RapidAPI-Key': 'your-api-key',
        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
      },
      params: {
        category: 'all',
        count: '1'
      }
    };
    
    axios.get('https://famous-quotes4.p.rapidapi.com/random', options)
      .then(response => {
        if (response.data && response.data[0]) {
          setQuote(response.data[0].text);
        } else {
          console.log('No quote found in response');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <View>
      <Text>Random Quote:</Text>
      <View>
        <Text>{quote}</Text>
      </View>
    </View>
  );
}
export default API;