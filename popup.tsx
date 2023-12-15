import { useState } from "react"

import "./global.css"
import ButtonLayout from "~ButtonLayout"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      className="body"
      >
      <h2><svg xmlns="http://www.w3.org/2000/svg" width="170" height="30" viewBox="0 0 192 32"><defs><linearGradient id="a" x1="78.933%" x2="32.755%" y1="0%" y2="100%"><stop offset="0%" stop-color="#EADBA1"></stop><stop offset="100%" stop-color="#D1B568"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill-rule="evenodd" fill="#3A3E4C" d="M13.735 2.437V4.7H2.3v7.88l10.193.003v2.429H2.3v9.941H0L.01 2.44l2.247-.002 11.478-.001zm11.188.1v22.155h-1.846V2.538h1.846zm18.903 0c2.048 0 3.543.586 4.483 1.758.942 1.17 1.413 2.5 1.413 3.993 0 2.684-.952 4.318-2.855 4.903.786.18 1.479.722 2.08 1.618.6.899.9 2.134.9 3.708 0 1.695-.405 3.108-1.212 4.237-.928 1.292-2.533 1.938-4.809 1.938h-8.75V2.538zm49.897 0l12 17.979V2.538H108v22.154h-2.277L93.692 6.714v17.978h-2.307V2.538h2.338zm34.062 0l7.907 22.155h-2.708l-1.937-6.173h-8.986l-2.03 6.173h-2.8l8.277-22.154h2.277zm27.292 0v2.24h-6.797v19.915h-2.286V4.777h-6.61v-2.24h15.693zm11.077 0v22.155h-1.846V2.538h1.846zm12.567 0l5.372 9.291 5.49-9.29H192l-6.445 10.924 6.295 11.23h-2.416l-5.341-9.322-5.28 9.322h-2.417l6.235-11.23-6.323-10.924h2.413zM43.826 14.222h-6.421v8.23h6.421c2.483 0 3.724-1.332 3.724-3.994 0-1.212-.31-2.22-.931-3.027-.622-.807-1.55-1.21-2.793-1.21zm82.79-8.261l-3.725 10.318h7.356L126.616 5.96zm-82.79-1.183h-6.421v7.202h6.421c2.401 0 3.6-1.2 3.6-3.6 0-2.402-1.199-3.602-3.6-3.602z"></path><path fill-rule="evenodd" fill="url(#a)" d="M71.279 22.224V2.636c4.844.567 8.62 4.74 8.62 9.794s-3.776 9.227-8.62 9.794M69.014.337V2.64l.015-.003v19.588c-4.845-.567-8.62-4.74-8.62-9.794a9.858 9.858 0 0 1 6.428-9.257V.763c-5.007 1.462-8.683 6.134-8.683 11.667 0 6.314 4.784 11.517 10.875 12.094v5.296h2.25v-5.296c6.091-.577 10.875-5.78 10.875-12.094 0-6.699-5.383-12.148-12-12.148-.384 0-.764.02-1.14.055z" transform="translate(0 1.333)"></path></g></svg>
</h2>
      <button className="start-btn" style={{ height: "35px", borderRadius: "5px", color: "rgb(29 33 45)" }}>START</button>
      <ButtonLayout></ButtonLayout>
    </div>
  )
}

export default IndexPopup