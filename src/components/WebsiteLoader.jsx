import React from 'react'
const WebsiteLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-xl font-semibold text-primary">
          Loading...
        </p>
      </div>
    </div>
  )
}

export default WebsiteLoader