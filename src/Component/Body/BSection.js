import React from 'react'
import style from './BSection.module.css'
const BSection = () => {
  return (
	<>	
	<div className={style.sec}>
	<div className={style.sec1}>
		<span>Samyak</span>
		<br></br>
		<span className={style.sec2}>Kamble</span>
		<br></br>
		<span className={style.sec2}>Web Developer</span>
	</div>
	<img src='' alt='Profile Samyak Kamble'></img>
	</div>
	</>

  )
}

export default BSection