'use client'

import Slider from 'react-slick';
import {Box} from "@mui/material";
import {BoxProps} from "@mui/system";
import {SemiannualIncreaseQuotaChart} from "@/app/dashboard/borrower/components/";
import {QoutaIncreasementPredictionChart} from "@/app/dashboard/borrower/components/";

interface SemiannualChartCarouselProps extends BoxProps {}

export const ChartsCarousel = (
    { sx } : SemiannualChartCarouselProps
) => {
    const settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Box sx={{...sx}} >
            <Slider {...settings}>
                <Box>
                    <SemiannualIncreaseQuotaChart semiannual={1} />
                </Box>
                <Box>
                    <SemiannualIncreaseQuotaChart semiannual={2} />
                </Box>
                <Box>
                    <QoutaIncreasementPredictionChart semiannual={1} />
                </Box>
            </Slider>
        </Box>
    );
}