import React from 'react';

const Assumptions = () => {
  return (
    <div className='assumptions'>
      <p className='assumptions__header'>Założenia:</p>
      <div className='assumptions__main'>
        <p>Aplikacja ma się składać z minimum 3 ekranów:</p>
        <ol>
          <li>Wyszukiwarka projektów githubowych</li>
          <li>Założenia całej aplikacji</li>
          <li>Wyliczanie silni</li>
        </ol>
        <p>Ad 1:</p>
        <ul>
          <li>Wykorzystane jest publiczne API Githuba;</li>
          <li>
            Czeka na podanie loginu użytkownika:
            <ul>
              <li>waliduje poprawność;</li>
              <li>obsługuje nieistniejące loginy;</li>
            </ul>
          </li>
          <li>
            wyświetla maksymalnie 5 projektów w kolejności od ostatnio updatowanego:
            <ul>
              <li>wyświetla maksymalnie 5 commitów każdego z projektów;</li>
            </ul>
          </li>
        </ul>
        <p>Ad 2:</p>
        <ul>
          <li>
            wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym) podziałem i układem;
          </li>
          <li>proszę zawrzeć też autora aplikacji - własne imię i nazwisko;</li>
        </ul>
        <p>Ad 3:</p>
        <ul>
          <li>input do podania liczby dla której będzie wyliczona silnia;</li>
          <li>historia poprzednich wyliczeń.</li>
        </ul>
        <p>Ogólne:</p>
        <ul>
          <li>
            {' '}
            korzysta z <span className='font-bold'>LESS / SASS</span>. Spełnia wymogi{' '}
            <span className='font-bold'>BEM</span>. Jest też{' '}
            <span className='font-bold'>estetyczna</span>;
          </li>
          <li>
            wyświetla <span className='font-bold'>co drugi</span> element każdej listy wyróżnionym
            kolorem;
          </li>
          <li>
            jest <span className='font-bold'>hostowana</span> (github pages, heroku, itd..), a jej
            kod jest dostępny <span className='font-bold'>publicznie</span>;
          </li>
        </ul>
        <span>
          Miło widziane użycie <span className='font-bold'>middlewarów reduxowych</span>.
        </span>
      </div>
    </div>
  );
};

export default Assumptions;
