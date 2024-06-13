import React, { useState, useRef, useEffect } from 'react'
import { Box, Button, Text, Flex, Grid, Card } from 'theme-ui'
import JSConfetti from 'js-confetti'

/** @jsxImportSource theme-ui */
const Join = ({ fold, last, showForm, setForm, formSent, setFormSent }) => {
  const [email, setEmail] = useState('')

  let jsConfetti = useRef()

  useEffect(() => {
    jsConfetti.current = new JSConfetti()
  }, [])

  const handleFormSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch('/api/arcade/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userEmail: email
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error:', errorData)
        // Optionally handle the error here (e.g., show a message to the user)
        return
      }

      setEmail('')
      setFormSent(true)
      jsConfetti.current.addConfetti({
        confettiColors: [
          // Hack Club colours!
          '#09AFB4',
          '#FF5C00'
        ]
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row'],
        gap: '10px',
        alignItems: ['center', 'center', 'center', 'start'],
        mt: 3,
        justifyContent: fold ? 'flex-start' : last ? 'flex-start' : 'flex-end'
      }}
    >
      {showForm ? (
        formSent ? (
          fold ? (
            <Box
              className="slackey"
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                border: '#09AFB4 2px dashed',
                color: '#09AFB4',
                width: 'fit-content',
                paddingX: ['8px', '10px', '15px'],
                paddingY: ['5px', '7px', '17px'],
                borderRadius: '5px',
                textAlign: 'center'
              }}
            >
              Check your email!
            </Box>
          ) : (
            <Flex
              as="a"
              href="https://hack.club/arcade-join"
              target="_blank"
              className="slackey"
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                backgroundColor: '#FF5C00',
                color: '#FAEFD6',
                width: 'fit-content',
                paddingX: ['8px', '10px', '15px'],
                paddingY: ['5px', '7px', '10px'],
                fontSize: ['24px', '27px', '30px'],
                borderRadius: '5px',
                textAlign: 'center',
                // margin: 'auto',
                // mt: 3,
                zIndex: 2
              }}
            >
              Get Stickers
            </Flex>
          )
        ) : (
          <form
            onSubmit={handleFormSubmit}
            sx={{
              height: '100%'
            }}
          >
            <Flex
              sx={{
                height: '60px',
                gap: '10px',
                fontSize: ['20px', '22px', '24px'],
                flexDirection: [
                  last ? 'column' : 'row',
                  last ? 'column' : 'row',
                  'row',
                  'row'
                ]
              }}
            >
              <Box
                sx={{
                  position: 'relative'
                }}
              >
                <Text
                  as="subtitle"
                  htmlFor="email"
                  sx={{
                    position: 'absolute',
                    top: '-30px',
                    color: '#FF5C00'
                  }}
                  className="gaegu"
                >
                  Your email:
                </Text>
                <input
                  type="email"
                  id="email"
                  placeholder="fiona@hackclub.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="gaegu"
                  sx={{
                    height: '60px',
                    pl: '10px',
                    border: '#FF5C00 2px solid',
                    color: '#FF5C00',
                    background: '#FAEFD6',
                    borderRadius: '5px',
                    fontSize: ['24px', '27px', '30px']
                  }}
                />
              </Box>
              <button
                type="submit"
                sx={{
                  backgroundColor: '#FF5C00',
                  color: '#FAEFD6',
                  borderRadius: '5px',
                  border: 'none',
                  fontSize: ['24px', '27px', '30px']
                }}
                className="slackey"
              >
                Join
              </button>
            </Flex>
          </form>
        )
      ) : (
        <Flex
          as="a"
          onClick={() => {
            setForm(true)
          }}
          target="_blank"
          className="slackey"
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            backgroundColor: '#FF5C00',
            color: '#FAEFD6',
            width: 'fit-content',
            paddingX: ['8px', '10px', '15px'],
            paddingY: ['5px', '7px', '10px'],
            fontSize: ['24px', '27px', '30px'],
            borderRadius: '5px',
            textAlign: 'center',
            // margin: 'auto',
            // mt: 3,
            zIndex: 2
          }}
        >
          Join ARCADE!
        </Flex>
      )}

      {fold ? (
        showForm ? (
          formSent ? (
            <Flex
              as="a"
              href="https://hack.club/arcade-join"
              target="_blank"
              className="slackey"
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                backgroundColor: '#FF5C00',
                color: '#FAEFD6',
                width: 'fit-content',
                paddingX: ['8px', '10px', '15px'],
                paddingY: ['5px', '7px', '10px'],
                fontSize: ['24px', '27px', '30px'],
                borderRadius: '5px',
                textAlign: 'center',
                // margin: 'auto',
                // mt: 3,
                zIndex: 2
              }}
            >
              Get Stickers
            </Flex>
          ) : (
            <></>
          )
        ) : (
          <Flex
            as="a"
            href="https://hack.club/arcade-join"
            target="_blank"
            className="slackey"
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
              border: '#FF5C00 2px solid',
              color: '#FF5C00',
              width: 'fit-content',
              paddingX: ['8px', '10px', '15px'],
              paddingY: ['5px', '7px', '10px'],
              fontSize: ['24px', '27px', '30px'],
              borderRadius: '5px',
              textAlign: 'center',
              // margin: 'auto',
              // mt: 3,
              zIndex: 2
            }}
          >
            Get Stickers
          </Flex>
        )
      ) : (
        <></>
      )}
    </Box>
  )
}

export default Join