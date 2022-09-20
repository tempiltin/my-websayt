import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
const Loading = () => {
  return (
    <div>
        
        <LoadingOverlay active={true} spinner text="Loading ...">

        </LoadingOverlay>
    </div>
  )
}

export default Loading