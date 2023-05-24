"use client"
import { useEffect, useState } from "react"
import cl from "clsx"
import styles from "./SearchBar.module.css"
import Search from "@ldx/ds-react/src/icons/Search"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchBarProps {}

export default function SearchBar() {
  const [hasText, setHasText] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>("")

  useEffect(() => {
    setHasText(() => inputValue.length !== 0)
  }, [inputValue])

  const clearText = () => {
    setInputValue("") // Clear input value

    const searchBar = document.getElementById(
      "searchbar-input"
    ) as HTMLInputElement
    searchBar.focus()
  }

  return (
    <div className="searchbar">
      <div className="lable">
        <label htmlFor="searchbar-input">Søk på nettsiden</label>
      </div>
      <div className={styles.formElement}>
        <div className={styles.searchbarInputWrapper}>
          <input
            className={styles.searchbarInput}
            id="searchbar-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
          <button
            className={cl(styles.searchbarButton, {
              hidden: !hasText,
            })}
            onClick={() => clearText()}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 4.385 13.385 12 21 19.615 19.615 21 12 13.385 4.385 21 3 19.615 10.615 12 3 4.385 4.385 3 12 10.615 19.615 3 21 4.385Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="search-button">
          <button className={styles.searchButton}>
            <Search classes={styles.searchIcon} />
          </button>
        </div>
      </div>
    </div>
  )
}
