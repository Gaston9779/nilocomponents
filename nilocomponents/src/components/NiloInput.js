import React from "react";
import { 
    // View, 
    TextInput, 
    // Dimensions, 
    // StyleSheet 
} from 'react-native'


// const H = Dimensions.get('window').height
// const W = Dimensions.get('window').width

const NiloInput = (props) => {
    const handleChange = (e) => {
        props.callback(e)
    }

    return (
        <TextInput
            style={props.style}
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={handleChange}
        ></TextInput>
    )
}

// const styles = StyleSheet.create({
//     inputText: {
//         backgroundColor: 'white',
//         height: H / 20,
//         width: W / 10,
//         textAlign: 'center',
//         shadowColor: "#000",
//         borderRadius: 10,
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     }
// })
export default NiloInput;