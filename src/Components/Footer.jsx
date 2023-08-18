import React from "react";
import { CFooter, CLink } from '@coreui/react'

export default function Footer() {
  return (
    <>
      <CFooter>
        <div>
            
          <span>&copy; 2023 S M Samnoon Abrar</span>
        </div>
        <div>
          <span>Powered by</span>
          <CLink href="https://github.com/samnoon1971"> samnoon1971</CLink>
        </div>
      </CFooter>
    </>
  );
}
