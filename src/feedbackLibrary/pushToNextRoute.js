const util ={
    pushToNextRoute: (Destination, srcComponent) => {
        console.log('routed');
        
        srcComponent.props.history.push(Destination)
    }
}

module.exports = util;