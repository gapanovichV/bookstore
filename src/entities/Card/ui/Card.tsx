import React from 'react'
import cn from "classnames";
import cls from './Card.module.scss'

import test from 'shared/assets/img/test.png'
import {BookSchemaApi} from "entities/AllBook";

export enum SizeCard {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  MOBILE = 'mobile'
}

interface CardProps {
  className?: string
  sizeCard: SizeCard
}

export const Card  = (props: CardProps & BookSchemaApi ) => {
  const {className, sizeCard, title, image, price, authors} = props


  return (
    <div className={cn(cls.card, cls[`size__${sizeCard}`],)}>
      <div className={cn(cls.top)}>
        <img src={image} alt="Book"/>
      </div>
      <div className={cn(cls.info)}>
        <p className={cn(cls.info__name)}>
          {title}
        </p>
        {
          sizeCard === SizeCard.SMALL ? null :
            <>
              <div className={cn(cls.info__line)}></div>
              <div className={cn(cls.info__book)}>
                {sizeCard === SizeCard.MOBILE ?
                    <div className={cn(cls.info__book_down)}>
                      <p>{authors[0]}</p>
                      <div className={cn(cls.info__book_prise)}>
                        ${price} <span className={cn(cls.info__book_prise_discont)}></span>
                      </div>
                    </div> :
                  <>
                    <div className={cn(cls.info__book_top)}>
                      <p>Writer</p>
                      <p>Buy now</p>
                    </div>
                    <div className={cn(cls.info__book_down)}>
                      <p>{authors[0]}</p>
                      <div className={cn(cls.info__book_prise)}>
                        <span className={cn(cls.info__book_prise_discont)}></span>${price}
                      </div>
                    </div>
                  </>
                }
              </div>
            </>
        }
      </div>
    </div>
  );
}