import React,{useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export default function SearchMovies(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const query = "jurassic"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=82deb1fcd05b4efc1a500a3def387a13&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            setMovies(data.results);
        } catch(err){
            console.error(err);
        }
    }
    return(
        <View>
            <TextInput style={styles.searchBox} placeholder="Search..." value={query}
            onChange={(e) => setQuery(e.target.value)}></TextInput>
            <Button onPress={searchMovies} title="Search" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#223343',
    },

    searchBox: {
        fontSize: 16,
        fontWeight: '300',
        padding: 10,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginVertical: 20,
  },

});