'use client'


import classNames from 'clsx'

import { Header } from '@/components/layout/header'
import AnimatedWords from '@/components/ui/flipping-words'

export default function Home({ children }: any) {
  const classes = classNames('GeneralLayout', 'min-h-[100vh] flex flex-col pb-10 lg:pb-12')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
        <div className="flex items-center justify-center">
          <AnimatedWords />
        </div>
        <div className="flex mt-3 h-24 w-full items-center justify-between lg:h-auto lg:w-auto ">
          <div>
            <p className="my-3">Deposit tokens, become a liquidity provider, genereate yields.</p>
            <p className="my-3">TradFi meets Defi - Take control of your finances</p>
          </div>
          <div>
            <button className="py-3 px-5 rounded-md bg-primary-dark text-secondary-dark hover:bg-primary-mid">
              Vaults
            </button>
          </div>
        </div>
        <div className="flex mt-6 h-52 w-full items-center justify-between">
          <div className="card text-secondary-dark">
            <div className="border-b border-secondary-dark">
              <p className="m-2 text-center text-lg font-bold">Vaults</p>
            </div>
            <div>
              <ul className="m-2">
                <li className="m-1">Invest</li>
                <li className="m-1">Earn</li>
                <li className="m-1">Yield Gen</li>
                <li className="m-1">Transparent</li>
                <li className="m-1">Trust</li>
              </ul>
            </div>
          </div>
          <div className="card text-secondary-dark">
            <div className="border-b border-secondary-dark">
              <p className="m-2 text-center text-lg font-bold">Community</p>
            </div>
            <div>
              <ul className="m-2">
                <li className="m-1">Learn</li>
                <li className="m-1">Share</li>
                <li className="m-1">Follow</li>
                <li className="m-1">Copy</li>
                <li className="m-1">Build</li>
              </ul>
            </div>
          </div>
          <div className="card text-secondary-dark">
            <div className="border-b border-secondary-dark">
              <p className="m-2 text-center text-lg font-bold">Privacy</p>
            </div>
            <div>
              <ul className="m-2">
                <li className="m-1">Anonymous</li>
                <li className="m-1">Private Withdrawals</li>
                <li className="m-1">You choose what data is shared publicly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
