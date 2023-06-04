import { motion } from 'framer-motion'
import Link from 'next/link'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FADE_IN_ANIMATION_SETTINGS } from '@/config/design'

import { BranchIsAuthenticated } from '../../integrations/siwe/components/branch-is-authenticated'
import { ButtonSIWELogin } from '../../integrations/siwe/components/button-siwe-login'
import { ButtonSIWELogout } from '../../integrations/siwe/components/button-siwe-logout'

import { WalletConnect } from '@/components/blockchain/wallet-connect'


export function UserDropdown() {
  return (
    <motion.div className="relative inline-block text-left text-neutral-700" {...FADE_IN_ANIMATION_SETTINGS}>
      <Popover>
        <PopoverTrigger>
          <button className="bg-primary-dark flex items-center justify-center overflow-hidden rounded-md p-2 px-4 transition-all duration-75 hover:bg-primary-mid focus:outline-none active:scale-95 ">
            Menu
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="w-full rounded-md p-2 ">
            <Link className="user-dropdown-menu-item" href="/">
              <p className="text-sm py-1">Home</p>
            </Link>
            <Link className="user-dropdown-menu-item" href="/vaults">
              <p className="text-sm py-1">Vaults</p>
            </Link>
            <Link className="user-dropdown-menu-item" href="/community">
              <p className="text-sm py-1">Community</p>
            </Link>
            <WalletConnect />
            {/* <BranchIsAuthenticated>
              <ButtonSIWELogout className="user-dropdown-menu-item flex">
                <LuLogOut className="h-4 w-4" />
                <span className="text-sm">Logout</span>
              </ButtonSIWELogout>
              <ButtonSIWELogin className="user-dropdown-menu-item flex">
                <LuLogOut className="inline-block h-4 w-4" />
                <span className="ml-2 text-sm">Login</span>
              </ButtonSIWELogin>
            </BranchIsAuthenticated> */}
          </div>
        </PopoverContent>
      </Popover>
    </motion.div>
  )
}