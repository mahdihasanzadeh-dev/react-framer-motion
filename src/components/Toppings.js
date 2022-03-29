import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x:0,
    transition: {
      type: 'spring',
      delay: 0.5,
      stiffness: 50,
      damping: 10,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 10px #fff",
    boxShadow: "0px 0px 10px #fff",
    transition: {
      yoyo: 2,
    }
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div 
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit= "exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li 
              key={topping} 
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.3,
                color:'#f8e71c',
                originX: 0,
                
              }}
              transition={{
                type: 'spring',
              }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
           whileHover="hover"
           variants={buttonVariants}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;