import { motion } from "framer-motion"

const Test = () => {
  return (
    <div className="course">
      <motion.div className="box" 
        initial={{ opacity:0.5, scale:0.5 }}
        transition={{ duration: 2,}}
        whileInView={{ 
            opacity : 1,
            scale : 2
         }}
        drag
      />

      
    </div>
  )
}

export default Test
