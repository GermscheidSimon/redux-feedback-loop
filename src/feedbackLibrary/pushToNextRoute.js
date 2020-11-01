//messing with creating functions and storing them for repeated use. this function takes in the destination route, and source compoenent ('this').
//passing this allows me to access that components props. 

const navigation = {
    pushToNextRoute: (Destination, srcComponent) => {
        console.log('routed');
        srcComponent.props.history.push(Destination)
    }
}

module.exports = navigation;