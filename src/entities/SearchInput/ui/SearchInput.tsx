import React, {useEffect, useState} from 'react'
import cn from "classnames";
import cls from './SearchInput.module.scss'
import Search from "shared/assets/icon/Search.svg";
import {BookSchemaApi, getAllBook, IAllBookSchema} from "entities/AllBook";
import {useSelector} from "react-redux";

interface SearchInput {
  className?: string
}

export const SearchInput  = ({className}: SearchInput) => {
  const books: IAllBookSchema = useSelector(getAllBook)
  const [searchTest, setSearchTest] = useState<string>("");
  const [results, setResults] = useState<BookSchemaApi[]>([])
  const [showResults, setShowResults] = useState<boolean>(false)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {value} = e.target
    setSearchTest(value)
  }

  const searchBook = (searchText: string): BookSchemaApi[] => {
    if (!searchText.trim()) return []

    return books.data.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()))
  }
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredBooks = searchBook(searchTest)
      setResults(filteredBooks)
    }, 300)

    return () => clearTimeout(Debounce);
  }, [searchTest]);

  useEffect(() => {
    if(results.length > 0 && !showResults) setShowResults(true)
    if(results.length <= 0) setShowResults(false)
  }, [results]);


  return (
    <div className={cn(cls.input__group)}>
      <div className={cn(cls.input)}>
        <input value={searchTest} onChange={handleChange} type="text" placeholder='What book are you looking for?'/>
        <button type="button"><Search/></button>
      </div>
      {
        showResults &&
        (
          <div className={cn(cls.dropdown)}>HooP</div>
        )
      }
    </div>
  );
}