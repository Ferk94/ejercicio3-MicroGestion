

const convertString = (str) => {

    

    const array = str.split(" ")
    const ay = 'ay'
    const newArray = []

    const lf = array[0][0]
    const lf2 = array[1][0]

    const ls = array[0][1].toUpperCase()
    const ls2 = array[1][1].toUpperCase()
    

    const w1 = ls + array[0].slice(2) + lf + ay
    const w2 = ls2 + array[1].slice(2) + lf2 + ay

    newArray.push(w1, w2)    
    

   const newStr = newArray.toString().replace(",", " ")
   console.log(newStr)

   return newStr

}


convertString("hello world")

convertString("fernando kaganovicz")

convertString("receta familiar")


