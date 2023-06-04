import React from 'react'

import classNames from 'clsx'
import Image from 'next/image'

import { siteConfig } from '@/config/site'
import BranchButtonLoginOrAccount from '@/integrations/siwe/components/branch-button-login-or-account'
import useScroll from '@/lib/hooks/use-scroll'

import { NavigationMenuGeneral } from './navigation-menu-general'
import { UserDropdown } from './user-dropdown'
import { LinkComponent } from '../shared/link-component'
import { ResponsiveMobileAndDesktop } from '../shared/responsive-mobile-and-desktop'

import { NetworkStatus } from '@/components/blockchain/network-status'
import { WalletConnect } from '@/components/blockchain/wallet-connect'

import logoMobile from '@/public/defi-struct-logo.png'
import logoDesktop from '@/public/defi-struct-logo-dark.png'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const scrolled = useScroll(50)
  const classes = classNames(
    props.className,
    'Header',
    'fixed top-0 w-full',
    'px-6 lg:px-10 py-3 mb-8 flex items-center',
    {
      'border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:bg-black/50 dark:border-gray-800': scrolled,
    },
    'z-30 transition-all'
  )
  return (
    <header className={classes}>
      <ResponsiveMobileAndDesktop>
        <>
          <div className="flex w-full justify-between p-4">
            <LinkComponent href="/" className="flex flex-1 items-center ">
              <Image alt="Logo" src={logoMobile} width={32} height={32} />
            </LinkComponent>
            <div className="">
              <UserDropdown />
            </div>
          </div>
        </>
        <>
          <LinkComponent className="flex items-center" href="/">
              <Image alt="Logo" src={logoDesktop} width={186} height={40} />
          </LinkComponent>
          <div className="flex flex-1 justify-center lg:px-10">
            <NavigationMenuGeneral />
          </div>

          <div className="flex items-center gap-4">
            {/* <NetworkStatus /> */}
            <WalletConnect />
          </div>
        </>
      </ResponsiveMobileAndDesktop>
    </header>
  )
}