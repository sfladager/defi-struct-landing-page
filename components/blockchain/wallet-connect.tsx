'use client'
import * as React from 'react'

import { ConnectButton, useAccountModal } from '@rainbow-me/rainbowkit'

interface WalletConnectCustomProps {
  className?: string
  classNameConnect?: string
  classNameConnected?: string
  classNameWrongNetwork?: string
  labelConnect?: string
  labelWrongNetwork?: string
}

export const WalletConnect = ({
  className,
  classNameConnect = 'btn btn-primary w-full',
  classNameConnected = 'btn btn-primary w-full',
  classNameWrongNetwork = 'btn btn-red w-full',
  labelConnect = 'Connect Wallet',
  labelWrongNetwork = 'Wrong Network',
}: WalletConnectCustomProps) => {

  const { openAccountModal } = useAccountModal();

  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, authenticationStatus }) => {
        console.log(account)
        const connected = account && chain && (!authenticationStatus || authenticationStatus === 'authenticated')

        return (
          <div className={className}>
            {(() => {
              if (!connected) {
                return (
                  <button className={classNameConnect} onClick={openConnectModal} type="button">
                    <span className="text-xs font-bold leading-none p-2 inline-block">
                      {labelConnect}
                    </span>
                  </button>
                )
              }

              if (chain.unsupported) {
                return (
                  <button className={classNameWrongNetwork} onClick={openChainModal} type="button">
                    <span className="text-xs font-bold leading-none p-2 inline-block">
                      {labelWrongNetwork}
                    </span>
                  </button>
                )
              }

              return (
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <button className={classNameConnected} onClick={openChainModal} style={{ display: 'flex', alignItems: 'center' }} type="button">
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 18,
                          height: 18,
                          // borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}>
                        {chain.iconUrl && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} style={{ width: 18, height: 18 }} />
                        )}
                      </div>
                    )}
                    <span className="uppercase whitespace-nowrap text-xs font-bold tracking-wider leading-none p-2">{chain.name}</span>
                  </button>
                  <button 
                    onClick={openAccountModal}  
                    className={classNameConnected}
                    type="button">
                    <span className="text-xs font-bold leading-none p-2 inline-block">
                      {account.displayName}
                    </span>
                  </button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default WalletConnect

