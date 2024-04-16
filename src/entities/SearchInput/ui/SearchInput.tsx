import React, {useEffect, useRef, useState} from 'react'
import cn from "classnames";
import cls from './SearchInput.module.scss'
import Search from "shared/assets/icon/Search.svg";
import {BookSchemaApi, getAllBook, IAllBookSchema} from "entities/AllBook";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {RoutePath} from "app/App";

interface SearchInput {
  className?: string
}

export const SearchInput  = ({className}: SearchInput) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const books: IAllBookSchema = useSelector(getAllBook)
  const [searchText, setSearchText] = useState<string>("");
  const [results, setResults] = useState<BookSchemaApi[]>([])
  const [showResults, setShowResults] = useState<boolean>(false)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {value} = e.target
    setSearchText(value)
  }

  const handleClickButtonFocus = () => {
    inputRef.current.focus()
  }

  const searchBook = (searchText: string): BookSchemaApi[] => {
    if (!searchText.trim()) return []
    return books.data.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()))
  }
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredBooks = searchBook(searchText)
      setResults(filteredBooks)
    }, 300)

    return () => clearTimeout(Debounce);
  }, [searchText]);

  useEffect(() => {
    if(results.length > 0 && !showResults) setShowResults(true)
    if(results.length <= 0) setShowResults(false)
  }, [results]);


  return (
    <div className={cn(cls.input__group)}>
      <div className={cn(cls.input, {[cls.show__result]: showResults})}>
        <input ref={inputRef} value={searchText} onChange={handleChange} type="text" placeholder='What book are you looking for?'/>
        <button onClick={handleClickButtonFocus} type="button"><Search/></button>
      </div>
      {
        showResults &&
        (
          <div className={cn(cls.dropdown)}>
            <div className={cn(cls.dropdown__line)}></div>
            {results.map((book: BookSchemaApi) =>
              <Link onClick={() => setSearchText('')} to={`${RoutePath.BOOK}/${book.idb}`} className={cn(cls.dropdown__card)} key={book.idb}>
                {book.title}
              </Link>
            )}
          </div>
        )
      }
    </div>
  );
}