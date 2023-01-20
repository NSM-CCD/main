import React, { useCallback, useMemo, useState } from "react"
import Link from "../../../../utils/link"
import chevronLeftIcon from "../../../../images/icons/chevron-left.svg"
import { FormInfoWrapper } from "../../../Hero/Form/FormInfo/forminfo.styles"
import axios from "axios"
import { toast } from "react-toastify"
import { getVisitorKey } from "../../../../utils/getVisitorKey"

const FormIntegration = ({ onClose }) => {
  const [submitting, setSubmitting] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [organization, setOrganization] = useState("")
  const [orgUrl, setOrgUrl] = useState("")
  const [contactName, setContactName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")

  const formObj = useMemo(
    () => ({
      cd_accountkey: "ayxPofCEvkuQt4gtmoabMQ",
      cd_domain: "classiccarvalues.com",
      cd_visitorkey:
        typeof window !== "undefined"
          ? window?.clickDimensionsVisitorKey
          : getVisitorKey(),
      cd_visitoremail: emailAddress,
      cd_timezone: new Date().getTimezoneOffset() / -60,
      cd_domainalias: "",
      cd_postsettings:
        "NWVOeVIxUlQ4dHVZZjM2aGNCcVMvTFBmS1V0SXdRZk50WmZ0dUNqVTZzd0ZQZmNHOGVZbVpBZFBsTFFWTmlQUzVjRzFQVGdMWXdhVE02TUVrTHVKZFVLamRKbm9jOExib083aDlLM1htRlNmR2c2aEZQcVNoS2ZhdmUxTHF5QTMxczRlQmFsQTlDRUxvUDl4RVVrVnpla2llWWtVd0NTeWc5UEtJWk5CNmNkQ1hvQmtwMFI0UnRTalBpTU5Zai9IVjgxM2pCd0laQkZ6WW9oZHlYWXAvOXd4TmhERzF0Q2gyalJhbVE3a3pNNm9ndStTemdXbnNtUk1rNURjRllpUkJ5UzVOVERHdStIOVpSc1F6UGFiNkZvWDRGYzBDUWhxdnoxM1ZlWmsxM3N3S2gwNXM2bjlwWmNzd1JtcjE2K0IyZ1RuL2JiZzFFdEZ5NHU5RUFGNk5GN2hQWk12U0c4WituWVUvQytSeG43V1p1RDBTbjR1Mzc1NXMxUm1sNEM2VDBXL0xrNWZmeEtTc24xSFZqVms3RTRVNStSUHppeWltbWJ3YXB6R0VKQXVQNUM5TlNBdmQzMXM3WWJIQ1F1Qjl0TEhlam5XUWR6cDZHQXdiYzZ4VVRTc3haNzRqR096YVNQYTU5ZTN1TU85TURuYWJsam55M2JnYkpFTUpjeXB6eldlNk1ZSXF6R2I2ZEU5dlRBaU1EbkwvRGp0UmROWndxYnF1OUxaRE1FYWNsNkFDTUhkeXgyYVNsZFpGRUdsb2F0TmVUVHhrayt2RlZYQWgvQS92ZTRRQjA0MElhWmtwanlnUFhjUjlSekVvS01oREpvVlR6QUNQd2pnd2VGdS8wb1h5aXBhdkY0NUdZSFJQZ0J3cUhvQmJxc09hQzJyd0dHY2FPZjYzYjlsSkYxOW9wQk9SMFl1WWhlYWRvSmRTTkM5OUNOME1IdFBWTFpreko3UDNEczEvTnpPZ1V2VG5VN09nWi8reFFtMVRBZ3VlT3JmeGdhZkd5OXhzcmlQYytFajQxRk9zaXRnZ0JLWmNCb2JHUHhrcmdwYmp0WTc1aSt1VEpRQXJWanZ1ZWIrUnJSbER1L0I5WElTZ0RSWkdIYjBwSVBEZzhoai9NNVRndVF6UHdFdXdqMjFUT0txTnBSUUFJcXJPR2IxZlRPYVF5d2ZwcE9pMjZmN0RtMEMyclBiKzVLSW96VS83aHlmV0IyRE1YVUlBN0ZPME5mSGp5MUZNbUJZd0VBRngyY1V0QnN0OVJ2ZUJOODM3Mm9QeHhxNXdHMXFJcGd6Vmw2aW9YRGJIRG5KRE5hLys0cXVVNGdKUGxTQWVOTmFsVjNUUUtWOFROOU9hRUM0bHdlUDZiRytJL1hFSmRsQTJWNC9aS2RXblJuR1JvUTcxc2MvNXhLckJYOE9vck11Yks4a01PYzRHNTByMUxabFptRHVJeE5rVUwxT2d1SDQwMnI4cUFGN2xQOHdvcWljZlU4V2VGS2IwbXBiM0ZHYXdsL0xMNnVjd3JHZ1RuVThuTTduWjVkMStLM1FKVTRQN1RrYVVyN1RqajF2QUkrbTFyUnZTckgyMzYzVHI5WlkwZzFBM2NNOFJ5K2E1dkVWaUxuMnJGK3Z6elU0bkJodUhCb3E4YkhnL1ZHT3N5NTJsU0VoSm9WaG4wb1dsTlR1V0s0QW1CWEVQV2FyMFFZNEhDRHAzcXd5RlY4YjRvN1A3dzF5K0RwUVpmTFBIMkFqVWFRdDdleVZNSk8zNktaT1p4aEpFRDNDNTU3WEQvaEEyQkg1TTFraG1leTlNa3R5OEFUZW12a1dGSGdOZ1pLdDQxYVdBNmI0dWk1KzZnRlhPUjh2NUpGaU9oVmJRWHFrMkkzQmt6V241TXFKckpOeXVGSnpBSnNER2VYM3NVVW1reWlDWFFNTURMaU1kYWNoZFJDUEtRNm9pUUV2YmlxanBRZ1d6MnhPYnI2T3ZXQ09iSU9PU1FiVHF4UEZIRmtmYXFDRm5Kc1hpWVJISStwb3RML201NUxkU0tEWmt1ek9jZkE1U1c2OG8zRUYvY1lvR3djdTZUKzVOTmZZcHEyZjI0OS9NeTIwU01DVys0RGJjVUZ4YjVCc2szM2JhL2N4bU16NEhFakhIeTJMaTZ3cmJIeHZiMzBOQ1hFOUpLeENISnZKM1VGSG9GMHE4ZWlxMVZqanRCczVwQTJZMTFOY3FyUjY3ZEJ5TVdjWGozbnJUSDhIL3JNb0VDb3BCUllTSDBJQW1sVVI2K0xoREpJSC9WS0RESktlbGJxanE4bVMxUnhhZXd1Vjg4TDBYV3FwZXFOcXBxNXRzUFFvMXZxWjVJZm5STHBCWjQvVXU2SDRLZjlMeFBtRDhRdFNXRkx5a1JWYnAxRU4wMTNwdEhFWmNjSjJTaVIwdGdud0hLNlNBTXhiQWkwckRWTUw0Z3lnNmFZcGhGN2wyZ2c2c1NTd2RFNXdYVkZBT3lEUFZLUysrUmN6T095akdZY3Zkd0hES0s1NWNjZEprdmk4SE5UMUU0UkRuQTlsNDlsWWQ3aHJxTkh1KzVGUXMvNzJQWTNjKzVmN0pIUDVOeDV1SmdrQnhVUEV5R2ZXT2c2cUV6Z0VIL3NXZ2hsOXFWZ3QxRE1YcTZIMGc1NGFRQzV5MFdCY0VzZTNNNW5tRFhBRm11RkdqMWNQc2FFT29DOUVBQnpkR2RIbkI4T1AzSVB2WEpUSFlJYXhvVUVVUjl2M01RR2NuU1Vuclo4N0dMckNxV1l5a1MvVTQvREdTVU9SNzFRMU5XK002N3QvR3gzbEt1RXFKdU5WVVJvUTFycmoxNnY1dURYQVpIUVdQZGVnNFhCQlBBMGl1ZVczYzl1Q0NEVTVxWWN2UjFNOUUrRFh1aFlUTStmdTBRUGtUdGpBQXhFdGhDZWlUY0p1K0NCTWx5bmVua0g2UFlOT09obzVIMk5Zai9ZYkI0QkZhaXdGNmE2NXVSWmptbk16WmVJUnhJeTF0MnZJNEZGNUhJVy9JaWN4a3AyaHlQK2U3OTZXbCttTjlTcURMdlRHaFFKalBqd25LVTFsbmVZMkZ5Z1dwVTRMZHE2MnZ3Z05PSDk1WU4yTnJodFpXd1pjMkY5NGMxT2FDbXRCNEF6YXpjV01uSVJvT2xTRWpOcWJLU0t0cWZOWUE3MkNYTDlEZWwwbVJoK1pBRUhXWmxYb3dtUUNzYzhZQUhWY1BHY1g1VXN4clQzVzQ5S2FhYll5dUFHNVNITWdIUTFOTDQ3bk9EUjAvV1VxWWhDNXEzNFQ3cTJpUm5hTFdpY3FoK1IwL2sxb2dzakVGcWFDN2dGdzBMcWJJMGFtdXdHVjQ1Mm1uTFhkdVE2YTdRQ2RtRisrRGRjNWtkN1JoUTJkb1B5OVBkYjhzZThVZUhVZ3FzUzdvOFdIRDhrem9kdzJiTGRxS2pRMjlIeHhrOEg1ZXlwSnFpbjNERVFBSHJHb1RNNTZtOCtWa0FtOGZhaHlZQ1RUSDNPU1NTa0ZNZ1U4cmoyQjZLT2hKZUsxb3NLc1hMRW5hTnpCbGFGV2tJdTI4ODBqRzE0bkpyUzFDWTBWNzRGaDBMeEN6S09jYVFMV05WcDMyM0UxblpOVSt3eUVwcmFFM3dzWDBsNU9KQXovVEkxRm4wcUZtV1llMHRZUGc5SGtKK21aLzVjN0twQTFzc2pxSHNwNDZsWnVqMmxOSGRuZy9rOWhhQjZ2Mi9heUFoUHZOMFZqMXdLUFI3UnAxRkkxNFgyeU9JajRCNlBMRWQ1cGFHRHVja0UrZU4yVXlCTW12c2ZpVnUydDlVaVNTOFhoS25uNFQ5OERnZTJPWDQ1Q3I3SERkWnh3SVF4aVc4eG41NGUrVHorWUpFZzV3eDJqS3ZabGtvamlzQzcrdW05M0VjdlVMaFJVTDhRRUdQMjE5RVVHR2NGR0l2UjE5R1RRYWJhM3kzNnFGUVFMeE51TGQwN2pWT1lFM2R3VVE2MVBlVUF0clErWk82YkJzVWxXd1gvVGxFOUl2UVdzbU5ZVU01d2s2UkRUUjhIeUlQc0VXOU1jWVVOWm92dzhUR1ZEajRFb09KZC9idVVOUmI4MXJ6UHVwZ0UvQnZvcHU5RkFtNTIyZkNpWVIxc3hXa2hhb1M1ZUpNRDVwZU0zQitlWngrR2xtTTBwTmJYeGxzNmF6ODRJQ3lZbFZhR09sS0lXK1hEemNKZjE3ckUyWi9XY2J0SjduZmtTb1NCZHY3UithdTBGbXJxeTJuQ2FXeTFyNWsyOURZSWczU0RNWWpWNkJPSVVNRlhRZ1krZTd2V1g3eWpURHdtRStnbVZiZ0Jsdlo2T1dvZmpvTTVVTTN4NVF0d00yYlBHMUYrN2pDRzQxYWVHN1pKN3ZNVm1JWXhraWd5OVBCN0dHVnlCNGM4YkcxMEJUcWx0Ykx1U1FIT2NTYlhON1M0WXYvKzRZQVd6TjJvZmFpaCt0MlhON2YzVGdHWnZkQkFZZDZyUmhXM2Y0SzJyWFdaMEd6ZENFcTFMR0phRkNGbEMzMTIyUkUvNGsrUW5TUlNGRUxlZDZ0dXMrSkxRaWxFPQ==",
      cd_ht_text: "",
      f_efcbf2f41967ec118f8f0022481e984d: emailAddress,
      f_29b46cb4745fed119562000d3a9a9396: organization,
      f_94bfc516755fed119562000d3a9bc7ff: contactName,
      f_d60146252398ed11aad1000d3a9962de: orgUrl,
    }),
    [emailAddress, organization, orgUrl, contactName]
  )

  const handleOrganization = useCallback(
    ({ target }) => setOrganization(target.value),
    []
  )

  const handleOrgUrl = useCallback(({ target }) => setOrgUrl(target.value), [])
  const handleContactName = useCallback(
    ({ target }) => setContactName(target.value),
    []
  )
  const handleEmail = useCallback(
    ({ target }) => setEmailAddress(target.value),
    []
  )

  const reset = useCallback(() => {
    setOrganization("")
    setOrgUrl("")
    setEmailAddress("")
    setContactName("")
    setHasError(false)
    setSubmitting(false)
  }, [])

  const handleInquire = useCallback(async () => {
    setSubmitting(true)
    const fd = new FormData()

    Object.entries(formObj).forEach(([key, value]) => {
      fd.append(key, value)
    })

    if (emailAddress && contactName && organization) {
      setHasError(false)
      await axios
        .post(
          //@TODO: update link before launch - remove cors bypass
          "https://justcors.com/l_42d5nkpzh3g/https://analytics.clickdimensions.com/forms/?visitor=contact",
          fd
        )
        .then(() => {
          toast.success("Success!", {
            autoClose: 2000,
            onClose: () => {
              setSubmitting(false)
              reset()
              onClose()
            },
          })
        })
        .catch(err => {
          console.log(err)
          toast.info("Oops, something went wrong!", {
            autoClose: 1500,
            onClose: () => setSubmitting(false),
          })
        })
    } else {
      setSubmitting(false)
      setHasError(true)
    }
  }, [formObj, emailAddress, contactName, organization, onClose, reset])

  const handleGoBack = useCallback(() => {
    reset()
    onClose()
  }, [reset, onClose])

  return (
    <FormInfoWrapper>
      <div className="heading">
        <div className="title-wrapper">
          <p className="title">Inquire for Integration</p>
        </div>
      </div>
      <hr className="horizontal-divider m-0" />
      <div className="form">
        <div className="form-group">
          <label htmlFor="org">Organization</label>
          <input
            type="text"
            className={`form-control ${
              !organization && hasError && "border-danger"
            }`}
            placeholder="Enter your organization"
            value={organization}
            onChange={handleOrganization}
          />
          <div
            className={`fade invalid ${!organization && hasError && "show"}`}
          >
            Please enter organization
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contact-name">Contact name</label>
          <input
            type="text"
            className={`form-control ${
              !contactName && hasError && "border-danger"
            }`}
            placeholder="Enter your contact name"
            value={contactName}
            onChange={handleContactName}
          />
          <div className={`fade invalid ${!contactName && hasError && "show"}`}>
            Please enter contact name
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="year">Email address</label>
          <input
            type="email"
            className={`form-control ${
              !emailAddress && hasError && "border-danger"
            }`}
            placeholder="Enter your email address"
            value={emailAddress}
            onChange={handleEmail}
          />
          <div
            className={`fade invalid ${!emailAddress && hasError && "show"}`}
          >
            Please enter email address
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="org-url">Organization URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your organization URL"
            value={orgUrl}
            onChange={handleOrgUrl}
          />
        </div>
      </div>
      <div className="terms-policy">
        <p className="agreement m-0">
          By clicking "Submit", you agree to the&nbsp;
          <Link to="/terms" openInNewTab>
            Terms
          </Link>
          &nbsp;and&nbsp;
          <Link to="/privacy" openInNewTab>
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <div className="action-buttons">
        <div className="buttons w-100">
          <button type="reset" className="btn-back" onClick={handleGoBack}>
            <img src={chevronLeftIcon} alt="chevron" />
            Go back
          </button>
          <button type="button" className="btn-inquire" onClick={handleInquire}>
            {submitting ? "Sending..." : "Inquire for Integration"}
          </button>
        </div>
      </div>
    </FormInfoWrapper>
  )
}

export default FormIntegration
