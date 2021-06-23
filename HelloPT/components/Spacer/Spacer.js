import React from 'react';

function Spacer({ top, bottom, left, right}) {
  return(
    <View style={{ marginTop: top, marginBottom: bottom, marginLeft: left, marginRight: right }}>   
    </View>
  )
}

export default Spacer;