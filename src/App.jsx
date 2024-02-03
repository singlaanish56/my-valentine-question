import { useState } from 'react'

function App() {
    const [noCount, setNoCount] = useState(0)
    const [yesCount, setYesCount] = useState(0)
    const [yesPressed, setYesPressed] = useState(false)

    const yesButtonSize = noCount *10  + 15
    const noButtonSize = yesCount *10  + 15

    const handleYesClick = () => {
      setYesCount(yesCount+1)
    }

    const handleNoClick = () => {
      setNoCount(noCount+1)
    }

    const getNoButtonText = () => {

      const phrases= [
        "No",
        "No ?????",
        "Will you break my heart like that ?",
        "You might regret this",
        "Maybe I deserve this",
        "Cries ensues",
        "For Hello Kitty in Exchange ?",
        "Try Again !",
        "I have a small heart too.",
        "For all the cats out there",
        "Pretty pleaseeeeeeeeee",
        "Afsana bana ke bhool mat jaana",
        "Teri yaad saath hai",
        "Ik vari haan karde mutiyare"
      ]

   
      if(noCount==phrases.length) setNoCount(0);

      return phrases[Math.min(noCount, phrases.length -1)]
    }

    const getYesButtonText = () => {
 
      const phrases= [
        "Yes",
        "Are you sure about that ?",
        "Phas jaoge",
        "Ironically Himesh Reshamiya sunauga",
        "I talk too much",
        "Still time to click no",
        "Please click for confirmation",
        "thanks !!!"
      ]

      if(yesCount==phrases.length -1) setYesPressed(true)
      return phrases[Math.min(yesCount, phrases.length -1)]
    }

  return (
    <>
      <div className='flex flex-col mx-auto items-center h-screen justify-center max-w-sm sm:min-w-sm sm:max-w-xl'>
        { yesPressed ? 
        (<>
          <img src="https://gifdb.com/images/high/milk-bear-love-mocha-cute-hug-o4qy1xq5p6myps41.gif" alt="" />
          <h1 className='text-xl sm:text-4xl text-center font-sans mx-auto text-red-500'>Yayyyyyyyyyyyyyyyyyyyyyyyyyyy !!!!</h1>
        </>)
        :
        (<>
            <img className='h-[200px]' src="https://gifdb.com/images/high/bear-love-bouncing-mocha-with-flowers-n4m0fyne6h4e6y2x.gif" alt="" />
            <h1 className='text-4xl text-center font-sans mx-auto my-10'>Will you be my Valentine ?</h1>
            <div className='flex flex-row items-center justify-between space-x-5 mx-auto mt-10'>
                <button 
                onClick={handleYesClick}
                className=' text-white bg-green-500 px-10 py-6 mx-auto rounded-md hover:bg-green-700' 
                style={{fontSize: yesButtonSize}}>
                {yesCount==0 ? "Yes" : getYesButtonText()}</button>
                <button 
                onClick={handleNoClick}
                className='text-white bg-red-500  px-10 py-6 mx-auto rounded-md hover:bg-red-700'
                style={{fontSize: noButtonSize}}>
                {noCount==0 ? "No" : getNoButtonText()}</button>
            </div>
        </>)}
      </div>
    </>
  )
}

export default App
