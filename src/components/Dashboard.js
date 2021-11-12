import React, {useState} from "react"
import {Card, Button, Alert } from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import TokenFarm from '../abis/TokenFarm.json'
import Web3 from 'web3'



export default function Dashboard(){

    const [error, setError]=useState("")
    const {currentUser, logout} = useAuth()
    const history=useHistory()

    async function display() {
        console.log(TokenFarm.abi[7].outputs)
        console.log(TokenFarm)
    }
    
    async function handlelogout()
    {
        setError('')
        try{
            await logout()
            history.push('/login')
        }catch{
            setError('Failed to log out')
        }
    }

    async function increaseInvest()
    {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const networkId = await web3.eth.net.getId()

        const tokenFarmData = TokenFarm.networks[networkId]
        const tokenFarm = new web3.eth.Contract(TokenFarm.abi, tokenFarmData.address)
        await tokenFarm.methods.issueTokens().call()
        console.log("Tokens issued!")
    }

    
    return (
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
                <div className="content mr-auto ml-auto"></div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    {/* <Button variant="link" onClick={increaseInvest}>Update</Button> */}
                    <Button variant="link" onClick={display}>Show</Button>
                    <div className="w-100 text-center mt-2">
                        <Button variant="link" onClick={handlelogout}>Log Out</Button>
                    </div>
                </Card.Body>
                
            </Card>
            
            
                </main>
            </div>
            </div>
        </>
    )
}