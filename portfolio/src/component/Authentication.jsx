import React from 'react'

    const URL = "https://api.durlavparajuli.com.np/api/auth/user";
    const Authentication = async ( ) => {
      const token=localStorage.getItem("token");
      try {
        const res = await fetch(URL, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
          },
        //   body: JSON.stringify(data),a
        })
        if (res.ok) {
          const res_data = await res.json();
          console.log(res_data.token);
        //   localStorage.setItem('token',res_data.token)
        //   navigate("/dashboard")
          // toast.success("submitted")
        }

        else {
          // toast.error("Failed")
        }
  
      } catch (err) {
        console.error(err)
        // toast.error("something went wrong please try again later")
        // console.log(err)
      }
      console.log(token);
    
    }


export default Authentication
