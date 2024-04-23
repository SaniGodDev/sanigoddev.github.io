import styles from '../styles/Connectors.module.css'
import { connectors, getConnectorName, Web3Connector } from '../connectors'
import { useCallback } from 'react'

function Connector({ web3Connector }: { web3Connector: Web3Connector }) {
  const [connector, hooks] = web3Connector
  const isActive = hooks.useIsActive()
  const onClick = useCallback(() => {
    if (isActive) {
      connector.deactivate()
    } else {
      connectors.forEach(([connector]) => connector.deactivate())
      connector.activate()
    }
  }, [connector, isActive])


  return (
    <div className={styles.connector} 
    onClick={onClick} 
    style={{
      textAlign: 'center', 
     // paddingLeft: '30px',
      cursor: 'pointer',  
      verticalAlign: 'middle', 
      backgroundColor: isActive? '#F85C27' : '#1E1E1E' ,
      borderRadius: '35px',
      border: '1px solid #FFFFFF',
      width: '272px', 
      fontSize: '18px'}}>
      {getConnectorName(connector)} &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default function Connectors() {
  return (
    <div className={styles.connectors}>
      {connectors.map((web3Connector, index) => (
        <Connector key={index} web3Connector={web3Connector} />
      ))}
    </div>
  )
}
