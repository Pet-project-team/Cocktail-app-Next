import React, { useState } from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import {
  PreviousIcon,
  NextIcon,
  TwitterIcon,
  FacebookIcon,
  CopyIcon,
} from '../../assets/cocktail_page/icons/CocktailPageIcons';
import Link from 'next/link';
import cocktailsList from '../../cocktails.json';
import ingredientsList from '../../ingredients.json';
import equipmentsList from '../../equipments.json';
import CocktailPageTab from '../cocktail_page/CocktailPageTab';
import CocktailPageTable from '../cocktail_page/CocktailPageTable';

type CocktailPageProps = {
  id: number;
};

type interfaceCocktailPageInfo = {
  cocktailName: string;
  photos: string[];
  cocktailDescription: string;
  ingredients: (
    | {
        ingredienId: number;
        numberOZ: number;
        haveLink: boolean;
        number?: undefined;
      }
    | {
        ingredienId: number;
        number: string;
        haveLink: boolean;
        numberOZ?: undefined;
      }
  )[];
  equipments: {
    equipmentId: number;
    haveLink: boolean;
  }[];
  recipe: (
    | {
        step: number;
        type: string;
        content: string;
        url?: undefined;
      }
    | {
        type: string;
        url: string;
        step?: undefined;
        content?: undefined;
      }
  )[];
  youtubeURL: string;
};

// type interfaceIngredientsList={

// }

export default function CocktailPage({ id }: CocktailPageProps) {
  const cocktailPageInfo: interfaceCocktailPageInfo =
    cocktailsList[id - 1].pageInfo!;

  const [tab, setTab] = useState(1);
  const [measurement, setMeasurement] = useState(1);
  const [isCopied, setIsCopied] = useState(false);
  const currentURL = window.location.href;

  return (
    <>
      <div id='top-links' className='flex justify-between h-[30px] mb-[20px]'>
        <Link
          className='flex items-center text-black/85 text-[16px] transition-all duration-300 hover:text-main-600'
          href={id - 1 === 0 ? '/' : '/cocktails/' + (id - 1)}
        >
          <PreviousIcon />
          {id - 1 === 0 ? 'On main page' : 'Previous cocktail'}
        </Link>
        <Link
          className='flex items-center text-black/85 text-[16px] transition-all duration-300 hover:text-main-600'
          href={'/cocktails/' + (id + 1)}
        >
          Next cocktail
          <NextIcon />
        </Link>
      </div>
      <div
        id='cocktail-page'
        className='flex items-start justify-between gap-[30px] self-stretch 
                  mb-[40px] p-[30px] rounded-[20px]
                bg-white shadow-def-md'
      >
        <div
          id='cocktail-main-info'
          className='flex flex-col items-center gap-[10px] min-w-[300px] w-[25%] max-w-[433px]'
        >
          <h1 className='text-black/85 text-center text-[28px] font-normal leading-[150%] m-auto'>
            {cocktailPageInfo?.cocktailName}
          </h1>
          <p className='text-black/85 text-[16px] leading-[150%] m-auto'>
            {cocktailPageInfo?.cocktailDescription}
          </p>
          <div
            id='share-links'
            className='flex items-center gap-[10px] self-stretch'
          >
            <p className='text-black/85 text-[16px] leading-[150%] m-0'>
              Share
            </p>
            <TwitterShareButton
              className='box-border relative h-[25px] cursor-pointer'
              title={
                'An incredible recipe for ' +
                cocktailPageInfo?.cocktailName +
                ' that will definitely turn out delicious!'
              }
              url={currentURL}
            >
              <TwitterIcon />
            </TwitterShareButton>
            <FacebookShareButton
              className='box-border relative h-[25px] cursor-pointer'
              title={
                'An incredible recipe for ' +
                cocktailPageInfo?.cocktailName +
                ' that will definitely turn out delicious!'
              }
              url={currentURL}
            >
              <FacebookIcon />
            </FacebookShareButton>
            <button
              type='button'
              className='box-border relative h-[25px] cursor-pointer'
              onClick={() => {
                navigator.clipboard
                  .writeText(
                    'An incredible recipe for ' +
                      cocktailPageInfo?.cocktailName +
                      ' that will definitely turn out delicious!\n' +
                      currentURL
                  )
                  .then(() => {
                    // If successful, update the isCopied state value
                    setIsCopied(true);
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 1500);
                  });
              }}
            >
              <CopyIcon />
              {isCopied && (
                <span className='text-black/85 cursor-default absolute top-[30px] left-[50%] translate-x-[-50%]'>
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
        <div id='cocktail-secondary-info' className='w-[70%] h-min'>
          <div id='navigation' className='flex justify-between mb-[10px]'>
            <nav className='flex h-[36px] gap-[30px]'>
              <CocktailPageTab
                tabName={'Essentials'}
                comparedTab={tab}
                tabValue={1}
                setComparedTab={setTab}
              />
              <CocktailPageTab
                tabName={'Recipe'}
                comparedTab={tab}
                tabValue={2}
                setComparedTab={setTab}
              />
              <CocktailPageTab
                tabName={'Video tutorial'}
                comparedTab={tab}
                tabValue={3}
                setComparedTab={setTab}
              />
            </nav>
            {tab === 1 && (
              <div id='measurement' className='flex gap-[30px]'>
                <p
                  id='measurement-title'
                  className='text-black/85 text-[16px] leading-[150%] h-[36px] pb-[12px] m-0'
                >
                  Measurement:
                </p>
                <CocktailPageTab
                  tabName={'ml'}
                  comparedTab={measurement}
                  tabValue={1}
                  setComparedTab={setMeasurement}
                />
                <CocktailPageTab
                  tabName={'oz'}
                  comparedTab={measurement}
                  tabValue={2}
                  setComparedTab={setMeasurement}
                />
              </div>
            )}
          </div>
          {tab === 1 && (
            <div id='ingredients-tab'>
              <div id='cocktail-secondary-info__content'>
                <h2 className=' text-black/85 text-start text-[24px] font-normal leading-[150%] mb-[10px]'>
                  Ingredients
                </h2>
                <CocktailPageTable
                  items={cocktailPageInfo.ingredients}
                  list={ingredientsList}
                  measurement={measurement}
                />
                <h2 className=' text-black/85 text-start text-[24px] font-normal leading-[150%] mb-[10px]'>
                  Equipment
                </h2>
                <CocktailPageTable
                  items={cocktailPageInfo?.equipments}
                  list={equipmentsList}
                  measurement={undefined}
                />
              </div>
            </div>
          )}
          {tab === 2 && (
            <div id='recipe-tab'>
              <h2
                className='text-black/85 text-start text-[24px] font-normal leading-[150%] mb-[10px]'
                id='recipe-title'
              >
                Step by step
              </h2>
              {cocktailPageInfo?.recipe.map((element) => (
                <>
                  {element.type === 'p' && (
                    <p
                      id='recipe-step'
                      className='text-black/85 text-[18px] leading-[150%] m-auto mb-[10px]'
                    >
                      {element.step && (
                        <span className='text-main-600 text-[22px]'>
                          {element.step}
                        </span>
                      )}
                      {' ' + element.content}
                    </p>
                  )}
                  {element.type === 'img' && (
                    <img
                      id='recipe-step-Image'
                      className='h-[300px] mb-[30px] rounded-[20px]'
                      alt='related to step text'
                      // width={100}
                      // height={100}
                      src={element.url}
                    ></img>
                  )}
                </>
              ))}
            </div>
          )}
          {tab === 3 && (
            <div id='video-tab'>
              <iframe
                width='100%'
                className='aspect-video'
                src={cocktailPageInfo?.youtubeURL}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
