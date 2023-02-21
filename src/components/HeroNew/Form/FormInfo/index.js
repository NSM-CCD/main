import React, { useCallback, useContext, useMemo, useState } from "react"
import { navigate } from "gatsby"
import axios from "axios"
import { toast } from "react-toastify"

import { FormInfoWrapper } from "./forminfo.styles"
import chevronLeftIcon from "../../../../images/icons/chevron-left.svg"
import { getVisitorKey } from "../../../../utils/getVisitorKey"
import { ACIContext } from "../../../../contexts/ACIContext"

const FormInfo = ({ onClose }) => {
  const [submitting, setSubmitting] = useState(false)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const { setIsFormSubmitted, slugParams } = useContext(ACIContext)

  const formObj = useMemo(
    () => ({
      cd_accountkey: "ayxPofCEvkuQt4gtmoabMQ",
      cd_domain: "classiccarvalues.com",
      cd_visitorkey:
        typeof window !== "undefined"
          ? window?.clickDimensionsVisitorKey
          : getVisitorKey(),
      cd_visitoremail: email,
      cd_timezone: new Date().getTimezoneOffset() / -60,
      cd_domainalias: "",
      cd_postsettings:
        "NWVOeVIxUlQ4dHVZZjM2aGNCcVMvTFBmS1V0SXdRZk50WmZ0dUNqVTZzejA2QStLNmVGYitONmxtNWw0dm5MaUFSKzFFa3BzMjFEVUdDcDZVdEp5b3Q5OVgxclRrTUFveVJvb09aSTNOajJxSmljODNJUjB3d2gvdUhtSmU5MHF3UEZhc2trNHVQZzFpS2x0aVI3ZVF3cWlkS2VGdDFkdEp3a0dqbk5iY3dyb0pvYitSRnI3dEtMQVFpbVp5aHBBNWF4cDNYa042MXdhaklqN3RWbUNkRDFROFp6dGgyNWMva2FXdGx2eW5kZlozV21rTjZ4aWVWazZxWjJiYUZpOXdlTytpR212YUM2WUpKdERDaU9wdlYydEdnNy8xZmZkS21wRjU4ZE0vSC85YUNYTmdaSW8vSVN1UzhhRVVtdlU4ZUl1bFFBd1BJYjhWZm1yR1pvcHh6cnNCM0xCSzlqZHoxUm5YRU5peldNWHQxbGtPZE1yT01Wa3RWS1QrZTdQUTIyTTdNYVdkZjJ6MWNzMFJobmxXd1dCY1dEOXd6Z0RLdXhJOXlqdy85eFJGYzYzTmpSVE9HT25BRnROeGQwQzdUdzlrNnNQVE0zdUdoR2ZJdHE1R0Z3MDFPYlZNRVlmRnFLRU9ITkhBR1NKR2VuTElHOXlobUtDc2Rkblk2Sk00elBUMmFPRDNkTmdDeGY4enMyYTlBYmR6NVczUTFhK1p5eE83ME5TNDEwM3NvSWpDRWVXWU1iZVhNeTY1NFJjVzZzYWhHc0NISE4rdFVwOEpiYXpldVFmbmgvOWk0bVQ5L1libGEvZ3FkMEovWmlwUE1PeEQybGo4VXlySzBjYkNwWWI1OEdyT3FtYWpGZ2VwWHZDNlpwZmhNYy9sazBZdlFNejZRajNaUjR6V3p3YjRudWJzWC9hMTBVb2xjaWtqVkN0SHZzdjVQbnhrNFBrbWhBQ1lieDkrZjZ1dDI0aWZkWUE0LzIwT1BFWHhldUVRSmRFOU4xRWNDeFFyMFQ5YUtHZUZtbGxqVkl4QTMwaDNIcnhObEE5R0xvejlzQytvMmFPYVIwL2llcVMvRU55eUZnb2luOTFYVjUvSmpqQUw4Qy9NNVhBRU9Vb1ozYSsyV2h4SUVTcmozdUZxOHlVdHdZdnFab2U2dXd1T0F6S1dPbE45cGRicWpUUlBnUDJ0cUFTK2hVelpZQXBUbGdyOUQ4eVFqMTVKQ2tQR0tFVXJxWGxORDZBNlEzdEZldTc5OGJqdldhc2FqT0hTR1N1U3I3VytJemwyS1lxRnc0T1BlTkhYUExxQVo1UW1NcGdnUDJ1VXU3UVpTaE9oalUzVXg5V291aHhyQlk5ZVZScm5SQ2hYc3FUZHpWRjR2M2hhQnFuQ0R1Y1VZSGtQVDVkeHFkUFdKbGVBbFpGakhTdVZRcGI2cm4xUjFaMUtla2R0akx5QUxsODY2NDZETXY3ZzE4Tk1ob3ZLWHJSb0swZkZQL3JFZVREYjZIVmFMRDA4QWVvYy81aUZ3dlViWEJ3TWtTdGdnd1g0aUlrYU93SlZiRnlxTXZ6SHJoZzk0cXVuWXZ5R05HaWpaTlV6U21LK1M3ZzlXeTI0TjN6T0hPNzVVc3RwQTU1NmUyTW9IWC9DZEZwYUVKZjdGSmpqUmN4NDNyaGQ2bGdLc1ppUC84a0s2RjRqRDhFRTc3bHVIclQ3bkFzWGlId0FrY2VrRUZQWXhnalVYeWRWNDlvaFlselM0dTNmNWJ4V21lMGx6Mk1MRXlDU1Qxd2M5bHp4V3FjbU9wOFVqU3piTlZtSnl1WW9VWVZxZU5RNW5XNHNjNlg2NW9YbmJZRVRpakF1UmxnajdGUk9WZS9zMENxeGgwVHYrRjBGNEVydW5ZQ0tnMVBieGRWbEt6ZThQOWEzbDluSjNxZEpXTGRQbDRRVlBreDRQcGd6MFhvVkg4MHIvTDZ3MnoyS213Ykp5bm9CV3R4c3F3Kzh0Ym9MKzhMU216NElpbkRMcFovMWRVK3F1V1p5akhrR1IyOXhtWTRPb2RFZ29sMEhJbG1xY2tDZUVaYlNMNWpUa1BYcnFud3E3d2RhOXhwaUtmaDU3Z05WQlQ3ck05aGRyZ0R6UVBROXhHcWUzMHpLVllsdExGbHlhamgrZldBTEMrbC9NVFE0YnV0aHMvYmZTVC9UUDVJWWlrOHVhRFJWOXl4bnVpeDlpWWZvRmtqSWpZTVFOQkQxMXVYYldDcTF6REtxdkpZc3d5N1JyUklHR3NjeXg2cUcvUDR0QnRiKzNEQzRmd05RV3RhT1lxbzB1c2NuMTF2aDVmQk1sSGJYZGMwSkdvN2JWYTQvYU43R3dXMXR5cnJ2NmFnVEk0ME1DS09vaktJL25WZmk1YVJwQnRGSEF0UTlSUGhhTVMwbDN2eCtwdlltdlMwczEzRlU2d25rYkV3enZIWVJUNHVkdDhmdjJiSUx3R3pWdWdZdW1xUG1lVlRQbzhnSHc3SHk0K1gyRWw4QmxpQXZ5SnFMK29IVUp0ZGcvTWtHMU4zcko3bmNxVEJkdEJmMEh5RFYwLzRUdDV0ZTlFWk00U0hMY0hUV0N3RGpPU3p4N1JwRmdnMUR0aHFCdVdGeFRnbUg4OEpyVmlwMFlNTm9PZW5CYmtUc0FzQXBHMERzcnA1ZjRGMGhUTldHZmJJa1BUVFdWZjFLbE9wYmtZZUFSaUgrNVhNRjF3TWdmbmt1Tms5S0h1bWNWTUxMTXZPcEw2UTloc0RMdUdxZkoxaXJ6T09yU21TOWNFaWh1cVlzUzh2L3ZSY0ROamRMNlBpc1ZpRGdFNHN4V09qQ1J6VmxvUDhVQzhmdFBsQW96aXdjakI2a2dwc2dJL1BOSkplYnUzMG9YcXp0cGZaeDZ6dXVQeEhCYjVSYnN0OVR6d25lY2ZacjluQXltVTdjRHZOOXFHelE3TVRnVFVHOEUrTzFnMWM4bUtzS0E3Uk14UkkzaHN1N1IwRFZRRWVyRlUyRTIzVEx5aTBhNzZIakJ4eWk3REVQMDZ1VS9Qb3JOSzd4Nk1pSlRma0ZtOGtmdGZTdURmNU5LYmYzV25odmxab1FqN01GWEIxb2pTaGdtYjdWNlpmV3lwWHVkbXhJRHFmdmtaOWVPOThzd094M0JOSEVFazlYaGhXWFNYZWRaeG5yQ1hSQndya1c2dFgwSnhKUkhQM2JENm43WGtQbFBtZ3g5RThBTVJNcHhVV0NpS2ozSlJicllXOWVTNmtBMUdhT1E5Szl2UXdaajZacExjSUY0ZVNNNHg2OThUSTZRK3BWcm4xSy9NTzRpRVp4NW0xTnZyaE50YmU5cXpRWWRUNENEWTNwRENxY3NickYvU012Y0U2QWF2N3IxQStXcmhMUi83OW1UcEJZTEwwcFlCSXpzeDZxTU1KemdrY2lhR2hab3VzMDRJYUJOR01nR2JoUTZuaHFaYmFqWXdnNnVOTFRJckRQNFRzWGZkUjZ0Ny94UFJhNHhMRFdDNXRRUGU4UW9GaXFtejgrT1lpMUIxVkhtemVYMzNQSWNsRkJGYmMrOXg1K0xjT25aWnM3RlB5",
      cd_ht_text: "",
      f_efcbf2f41967ec118f8f0022481e984d: email,
      f_29b46cb4745fed119562000d3a9a9396: firstName,
      f_94bfc516755fed119562000d3a9bc7ff: lastName,
    }),
    [email, firstName, lastName]
  )

  const handleEmail = useCallback(({ target }) => setEmail(target.value), [])
  const handleFirstName = useCallback(
    ({ target }) => setFirstName(target.value),
    []
  )
  const handleLastName = useCallback(
    ({ target }) => setLastName(target.value),
    []
  )

  const handleSubmit = useCallback(async () => {
    setSubmitting(true)
    setIsFormSubmitted(true)

    const fd = new FormData()

    Object.entries(formObj).forEach(([key, value]) => {
      fd.append(key, value)
    })

    if (email) {
      await axios
        .post(
          //@TODO: update link before launch - remove cors bypass for testing
          "https://justcors.com/l_42d5nkpzh3g/https://analytics.clickdimensions.com/forms/?visitor=lead",
          fd
        )
        .then(() => {
          toast.success("Success! Generating report...", {
            autoClose: 1500,
            onClose: () => {
              setSubmitting(false)
              navigate(`/results?rdata=${btoa(slugParams)}`)
            },
          })
        })
        .catch(err => {
          console.log(err)
          toast.info("Oops, something went wrong!", {
            autoClose: 1500,
            onClose: () => {
              setSubmitting(false)
              navigate(`/results?rdata=${btoa(slugParams)}`)
            },
          })
        })
    } else {
      toast.info("Generating reports...", {
        autoClose: 1500,
        onClose: () => {
          setSubmitting(false)
          navigate(`/results?rdata=${btoa(slugParams)}`)
        },
      })
    }
  }, [formObj, email, slugParams, setIsFormSubmitted])

  return (
    <FormInfoWrapper>
      <div className="progress">
        <div className="progress-bar w-50" />
      </div>
      <div className="heading">
        <div className="title-wrapper">
          <p className="title">Almost there!</p>
        </div>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your first name"
            value={firstName}
            onChange={handleFirstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your last name"
            value={lastName}
            onChange={handleLastName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmail}
          />
        </div>
      </div>
      <div className="terms-policy">
        <p className="agreement m-0">
          Your personal Information will never be shared and is Optional. By
          clicking "Get Estimate" You agree to the&nbsp;
          <a
            href="https://americancollectors.com/terms-of-use/"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://americancollectors.com/privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <div className="action-buttons">
        <div className="buttons w-100">
          <button
            type="reset"
            className="btn-back"
            disabled={submitting}
            onClick={onClose}
          >
            <img src={chevronLeftIcon} alt="chevron" />
            Go back
          </button>
          <button
            type="button"
            className="btn-estimate"
            disabled={submitting}
            onClick={handleSubmit}
          >
            {submitting ? "Estimating..." : "Get Estimate"}
          </button>
        </div>
      </div>
    </FormInfoWrapper>
  )
}

export default FormInfo
