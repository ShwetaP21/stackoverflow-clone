import React from 'react'

const Avatar = ({children,backgroundColor,color,fontSize,borderRadius,px,py,cursor}) => {
    const style ={
        backgroundColor,
        color: color || "black",
        fontSize,
        borderRadius,
        padding: `${py} ${px}`,
        textAlign: "center",
        cursor: cursor || null,
        textDecoration: "none"
    }
  return (
    <div style={style}>{children}</div>
  )
}

export default Avatar