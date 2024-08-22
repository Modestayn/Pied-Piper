// Slider.jsx
import './Slider.css';

export const Slider = () => {
    $(function() {
        let slider = $('.slider-list')
        function slide() {
            slider.animate( { left: '-100%' }, 900, function () {
                let firstSlide = $('.slider-list div').first().remove()
                slider.append(firstSlide)
                slider.css('left', '0')
            })
        }
        function backSlide() {
            let lastSlide = $('.slider-list div').last().remove()
            slider.prepend(lastSlide)
            slider.css('left', '-100%')
            slider.animate( { left: '0' }, 900, function () {
                slider.css('left', '0')
            })
        }

        let timerId = setInterval(slide, 5000)

        $('.slider-right-arrow').on('click', function () {
            $(this).attr('disabled', true).css('opacity', '0.3')
            setTimeout(function showArrow () {
                $('.slider-right-arrow').attr('disabled', false).css('opacity', '1')
            }, 900)
            slide()
            clearInterval(timerId)
            timerId = setInterval(slide, 5000)
        })

        $('.slider-left-arrow').on('click', function () {
            $(this).attr('disabled', true).css('opacity', '0.3')
            setTimeout(function showArrow () {
                $('.slider-left-arrow').attr('disabled', false).css('opacity', '1')
            }, 900)
            backSlide()
            clearInterval(timerId)
            timerId = setInterval(slide, 5000)
        })
    })
    return (
        <>
            <div className="slider-wrapper">
                <div className="slider">
                    <div className="slider-list">
                        <div style={{backgroundImage: "url(/assets/img/bg.jpg)"}}></div>
                        <div style={{backgroundImage: "url(/assets/img/slide2.jpg)"}}></div>
                        <div style={{backgroundImage: "url(/assets/img/slide3.jpg)"}}></div>
                        <div style={{backgroundImage: "url(/assets/img/slide4.jpg)"}}></div>
                        <div style={{backgroundImage: "url(/assets/img/slide5.jpg)"}}></div>
                        <div style={{backgroundImage: "url(/assets/img/slide6.jpg)"}}></div>
                        <div style={{backgroundImage: "url(/assets/img/slide7.jpg)"}}></div>
                        <div style={{backgroundImage: "url(/assets/img/slide8.jpg)"}}></div>
                    </div>
                    <button className="slider-right-arrow"><i className="fa-solid fa-chevron-right"></i></button>
                    <button className="slider-left-arrow"><i className="fa-solid fa-chevron-left"></i></button>
                </div>
            </div>
        </>
    );
};
