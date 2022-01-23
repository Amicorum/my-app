const getElemName = (e) =>{
    if (e?.target?.getAttribute('name') !== undefined) {
      return e.target.getAttribute('name')
    } else {
      return e
    }
  }
  
 const liftNav = (e, source) => {
      let name = getElemName(e)
      switch (source) {
        case 'elevatorBtn':
          
          break;
        case 'floorUp':
        
          break;
        case 'floorDwn':
      
          break;
      
        default:
          break;
      }
      return name
    }

    export {liftNav}