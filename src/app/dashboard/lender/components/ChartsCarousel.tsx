'use client'

import Slider from 'react-slick';
import {SemiannualEarningsChart, InvestmentDistributionChart} from "@/app/dashboard/lender/components/";
import {Box} from "@mui/material";
import {BoxProps} from "@mui/system";

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
                    <SemiannualEarningsChart semiannual={1} />
                </Box>
                <Box>
                    <SemiannualEarningsChart semiannual={2} />
                </Box>
                <Box>
                    <InvestmentDistributionChart />
                </Box>
            </Slider>
        </Box>
    );
}