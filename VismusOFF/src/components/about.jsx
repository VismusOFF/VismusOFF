// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <section id="about" className='about'>
            <h2>Обо мне</h2>
            <div className='aboutText'>
                <div className='name'>Имя: Жигач Дмитрий Никитович</div>
                <div>Профессия: программист</div>
                <div>Чем занимаюсь: пишу музыку и разрабатываю сайты</div>
                <div>Возраст: 20 лет</div>
                <div>Образование: получил 9 классов образования в МОУ СОШ №2</div>
                <div>Навыки: HTML, CSS, REACT, PHOTOSHOP, CAPCUT, FLSTUDIO, FIGMA, PIXSO, Firebase, MUI, ReactRouterDom, ReactDataTableComponent, Netlify, Electron, Vite </div>
                <div className='divider'></div> {/* Добавленный разделитель */}
            </div>
            <div className='container'>
                <div className='music'>
                    Как музыкант
                    <div className='musicText'>
                    С 2020 года занимаюсь музыкальным творчеством. Начал изучать программу FL Studio в 9 классе, первоначально сосредоточившись на жанре синтвейв. В первом курсе колледжа я попробовал себя в жанре дабстеп, однако не достиг желаемых результатов. Позже переключился на жанр phonk, активно тренировался, записывал множество проектов и изучал видеоуроки. В результате выбрал несколько заготовок и довёл их до завершения. В настоящее время подписал контракт с дистрибьютором FreshTunes и начал размещать свою музыку на популярных платформах, таких как Spotify, Deezer, Яндекс Музыка и YouTube.
                    </div>
                </div>

                <div className='developer'>
                    Как разработчик
                    <div className='musicText'>
                    Начал изучать разработку сайтов на втором курсе самостоятельно. Причиной послужил урок Натальи Сергеевны, на котором она продемонстрировала базовые принципы создания сайтов. Это вызвало у меня интерес, и я решил углубиться в эту тему. За лето второго курса я изучил основы HTML и CSS, освоив их за месяц. Затем начал изучать React, смотрел видеоуроки и делал конспекты. Начиная с третьего курса, я стал выполнять все свои работы, включая практические задания и курсовые, с использованием React.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
