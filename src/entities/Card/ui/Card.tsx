import React from 'react'
import cn from "classnames";
import cls from './Card.module.scss'

import test from 'shared/assets/img/test.png'

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
export const Card  = ({className, sizeCard}: CardProps) => {
  return (
    <div className={cn(cls.card, cls[`size__${sizeCard}`],)}>
      <div className={cn(cls.top)}>
        <img src={test} alt="Book"/>
      </div>
      <div className={cn(cls.info)}>
        <p className={cn(cls.info__name)}>
          The Miracles of the Namiya General Store
        </p>
        {
          sizeCard === SizeCard.SMALL ? null :
            <>
              <div className={cn(cls.info__line)}></div>
              <div className={cn(cls.info__book)}>
                {sizeCard === SizeCard.MOBILE ?
                    <div className={cn(cls.info__book_down)}>
                      <p>Keigo Higashino</p>
                      <div className={cn(cls.info__book_prise)}>
                        $19.0 <span className={cn(cls.info__book_prise_discont)}>$23.5</span>
                      </div>
                    </div> :
                  <>
                    <div className={cn(cls.info__book_top)}>
                      <p>Writer</p>
                      <p>Buy now</p>
                    </div>
                    <div className={cn(cls.info__book_down)}>
                      <p>Keigo Higashino</p>
                      <div className={cn(cls.info__book_prise)}>
                        <span className={cn(cls.info__book_prise_discont)}>$23.5</span>$19.0
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