// ---------------------------------------------------------------
    // PIN DATA
    // x and y are PERCENTAGES of the image width/height (0-100),
    // NOT pixels. This keeps markers aligned even if the image is
    // resized or viewed on a different screen.
    //
    // To find a pin's x/y: open the image in an image editor (or
    // even MS Paint / Preview), hover the pin, note the pixel
    // coordinates, then:
    //   x% = (pixel_x / image_width_px)  * 100
    //   y% = (pixel_y / image_height_px) * 100
    // ---------------------------------------------------------------

    const left_left_pinout_div = "left-left-pinout";
    const left_right_pinout_div = "left-right-pinout";
    const right_left_pinout_div = "right-left-pinout";
    const right_right_pinout_div = "right-right-pinout";
    

    const pins = [ 
    // Increment x by 4 to go 1 pin to right
    // increment y by

    //Left Group     
      // CN7 ODD PINS
      { name: "PC10", x: 30, y: 303}, // HERE!! FOR FUNCTIONS
      { name: "PC12", x: 30, y: 326.5},
      { name: "VDD", x: 30, y: 350},
      { name: "BOOT0", x: 30, y: 373.5},
      { name: "NC", x: 30, y: 397},
      { name: "NC", x: 30, y: 420.5},
      { name: "PA13", x: 30, y: 444},
      { name: "PA14", x: 30, y: 467.5},
      { name: "PA15", x: 30, y: 491},
      { name: "GND", x: 30, y: 514.5, functions: ["Ground"], group: "GND"},
      { name: "NC", x: 30, y: 538, functions: []},
      { name: "PC13", x: 30, y: 561.5, functions: ["USER button (DEFAULT)", "IO"]},
      { name: "PC14", x: 30, y: 585, functions: ["LSE CLK", "IO"]},
      { name: "PC15", x: 30, y: 608.5, functions: ["LSE LCK", "IO"]},
      { name: "PF0", x: 30, y: 632, functions: ["HSE CLK", "I", "I3C2_SDA", "I2C2_SDA", "FMC_A0"]},
      { name: "PF1", x: 30, y: 655.5, functions: ["HSE LCK", "O", "I3C2_SCL", "I2C2_SCL", "FMC_A1"]},
      { name: "VBAT", x: 30, y: 679, functions: ["Power supply for RTC when VDD is not present"]},
      { name: "PC2", x: 30, y: 702.5, functions: ["IO", "PWR_CSLEEP", "SPI2_MISO/I2S2_SDI"], group: "IO"},
      { name: "PC3", x: 30, y: 726, functions: ["IO", "PWR_CSTOP", "LPUART1_TX", "SPI2_MOSI/I2S2_SDO"], group: "IO"},

      // CN7 EVEN PINS
      { name: "PC11",   x: 54, y: 303, functions: ["IO", "I3C2_SDA", "SPI3_MISO/I2S3_SDI", "USART3_RX"], group: "IO"},
      { name: "PD2", x: 54, y: 326.5, functions: ["USB_FS_OVCR", "TIM3_ETR"]},
      { name: "E5V", x: 54, y: 350, functions: ["External 5 volt power at 500mA"]},
      { name: "GND", x: 54, y: 373.5, functions: ["Ground"], group: "GND"},
      { name: "NC", x: 54, y: 397, functions: []},
      { name: "IOREF", x: 54, y: 420.5, functions: []},
      { name: "NRST", x: 54, y: 444, functions: ["STM32H5 RESET"], group: "NRST"},
      { name: "3V3", x: 54, y: 467.5, functions: ["3V3 output (3V-3.6V, max 1.3A)"], group: "3V3"},
      { name: "5V", x: 54, y: 491, functions: ["ADC1_INP0 (DEFAULT)", "User button"]},
      { name: "GND", x: 54, y: 514.5, functions: ["Ground"], group: "GND"},
      { name: "GND", x: 54, y: 538, functions: ["Ground"], group: "GND"},
      { name: "VIN", x: 54, y: 561.5, functions: ["Power Input (7V = 800mA, (7V, 9V) = 450mA, [9V, 12V] = 250mA)"], group: "VIN"},
      { name: "NC", x: 54, y: 585, functions: []},
      { name: "PA0", x: 54, y: 608.5, functions: ["ADC1_INP0 (DEFAULT)", "User button", "TIM2_CH1", "SPI3_RDY", "USART2_CTS/USART2_NSS", "FDCAN2_RX", "TIM2_ETR"]},
      { name: "PA1", x: 54, y: 632, functions: ["ADC1_INP1", "TIM2_CH2", "LPTIM1_IN1", "USART2_RTS"], group: "PA1"},
      { name: "PA2(*) /PB1(*)", x: 54, y: 655.5, functions: ["TIM2_CH3", "LPUART1_TX", "LPTIM1_IN2", "USART2_TX"]}, // HERE!!!
      { name: "PB0", x: 54, y: 679, functions: ["ADC1_INP9", "TIM1_CH2N", "TIM3_CH3", "SPI3_MISO/I2S3_SDI", "USART2_TX"], group: "PB0"},
      { name: "PC1(DEFAULT)/PB7", x: 54, y: 702.5, functions: ["ADC1_INP11 (PC1)", "I2C1_SDA (PB7)", "SPI2_MOSI/I2S2_SDO"], group: "PC1"},
      { name: "PC0(DEFAULT)/PB6", x: 54, y: 726, functions: ["ADC1_INP10 (PC0)", "ADC1_INP10(PB6)", "SPI2_RDY", "FMC_A25"], group: "PC0"},
      
      // CN6 POWER
      { name: "NC", x: 100, y: 397, functions: []},
      { name: "IOREF", x: 100, y: 420.5, functions: ["3V3 ref"]},
      { name: "NRST", x: 100, y: 444, functions: ["STM32H5 RESET"], group: "NRST"},
      { name: "3V3", x: 100, y: 467.5, functions: ["3V3 output (3V-3.6V, max 1.3A)"], group: "3V3"},
      { name: "5V", x: 100, y: 491, functions: ["5V input"]},
      { name: "GND", x: 100, y: 514.5, functions: ["Ground"], group: "GND"},
      { name: "GND", x: 100, y: 538, functions: ["Ground"], group: "GND"},
      { name: "VIN", x: 100, y: 561.5, functions: ["Power Input (7V = 800mA, (7V, 9V) = 450mA, [9V, 12V] = 250mA)"], group: "VIN"},
      
      // CN8 ANALOG
      { name: "PA0", x: 100, y: 611, functions: ["ADC1_INP0 (DEFAULT)", "User Button"]},
      { name: "PA1", x: 100, y: 634.5, functions: ["ADC1_INP1"], group: "PA1"},
      { name: "PA2/PB1", x: 100, y: 658, functions: []}, // HERE!!!
      { name: "PB0", x: 100, y: 681.5, functions: ["ADC1_INP9"], group: "PB0"},
      { name: "PC1(DEFAULT)/PB7", x: 100, y: 705, functions: ["ADC1_INP11 (PC1)", "I2C1_SDA (PB7)"], group: "PC1"},
      { name: "PC0(DEFAULT)/PB6", x: 100, y: 728.5, functions: ["ADC1_INP10 (PC0)", "ADC1_INP10(PB6)"], group: "PC0"},

    // Right Group

        // CN5 DIGITAL
        { name: "PB6", x: 553, y: 310, functions: ["I2C1_SCL", "I3C1_SCL", "USART1_TX", "LPUART1_TX", "FDCAN2_TX"], group: "PB6"},
        { name: "PB7", x: 553, y: 333.5, functions: ["I2C1_SDA", "I3C1_SDA", "LPUART1_RX", "FDCAN1_TX", "FMC_NL"], group: "PB7"},
        { name: "NC", x: 553, y: 357, functions: ["AVDD"], group: "AVDD"},
        { name: "NC", x: 553, y: 380.5, functions: ["Ground"], group: "GND"},
        { name: "PA5", x: 553, y: 404, functions: ["TIM2_CH1", "SPI1_SCK/I2S1_CK", "TIM2_ETR"], group: "PA5"},
        { name: "PA6", x: 553, y: 427.5, functions: ["TIM1_BKIN", "TIM3_CH1", "SPI1_MISO/I2S1_SDI"], group: "PA6"},
        { name: "PA7", x: 553, y: 451, functions: ["TIM1_CH1N", "TIM3_CH2", "SPI1_MOSI/I2S1_SDO", "FMC_NWE"], group: "PA7"},
        { name: "PC9", x: 553, y: 474.5, functions: ["TIM3_CH4", "SPI1_NSS", "MCO2", "I2C3_SDA", "FMC_CLE"], group: "PC9"},
        { name: "PC6", x: 553, y: 498, functions: ["TIM3_CH1", "I2S2_MCK", "USART6_TX", "FMC_NWAIT", "I3C2_SCL"], group: "PC6"},
        { name: "PC7", x: 553, y: 521.5, functions: ["IO", "TIM3_CH2", "I2S3_MCK", "FMC_NE1", "I3C2_SDA"], group: "IO"},

        // CN9 DIGITAL
        { name: "PA8", x: 553, y: 562, functions: ["IO"], group: "IO"},
        { name: "PB10", x: 553, y: 585.5, functions: ["TIM2_CH3"], group: "PB10"},
        { name: "PB4", x: 553, y: 609, functions: ["TIM1_CH2"], group: "PB4"},
        { name: "PB5", x: 553, y: 632.5, functions: ["IO"], group: "IO"},
        { name: "PB3", x: 553, y: 656, functions: ["TIM2_CH2", "T_SWO"], group: "PB3"},
        { name: "PA10(*)/PC8(*)", x: 553, y: 679.5, functions: []}, // HERE!!!
        { name: "PB14(DEFAULT)/PA4(*)/P2(*)", x: 553, y: 705, functions: ["ARD_D1 (PB14 DEFAULT)", "STLINK_TX (T_VCP_TX) (*)"], group: "PB14"}, // HERE!!! AND FOR 
        { name: "PB15(DEFAULT)/PA3(*)", x: 553, y: 730, functions: ["ARD_D0 (PB15 DEFAULT)", "STLINK_RX (T_VCP_RX)"], group: "PB15"}, // HERE!!!


        // CN10 ODD PINS
        { name: "NC", x: 600, y: 301, functions: []},
        { name: "PB6", x: 600, y: 324.5, functions: ["I2C1_SCL", "I3C1_SCL"], group: "PB6"},
        { name: "PB7", x: 600, y: 348, functions: ["I2C1_SDA", "I3C1_SDA"], group: "PB7"},
        { name: "AVDD", x: 600, y: 371.5, functions: ["AVDD is connected to VDD_MCU by default (R33 fitted)."], group: "AVDD"},
        { name: "GND", x: 600, y: 395, functions: ["Ground"], group: "GND"},
        { name: "PA5", x: 600, y: 418.5, functions: ["SPI1_SCK"], group: "PA5"},
        { name: "PA6", x: 600, y: 442, functions: ["SPI1_MISO"], group: "PA6"},
        { name: "PA7", x: 600, y: 465.5, functions: ["SPI1_MOSI", "TIM3_CH2"], group: "PA7"},
        { name: "PC9", x: 600, y: 489, functions: ["SPIx_CS", "TIM3_CH4"], group: "PC9"},
        { name: "PC6", x: 600, y: 512.5, functions: ["TIM3_CH1"], group: "PC6"},
        { name: "PC7", x: 600, y: 536, functions: ["IO"], group: "IO"},
        { name: "PA8", x: 600, y: 559.5, functions: ["IO"], group: "IO"},
        { name: "PB10", x: 600, y: 583, functions: ["TIM2_CH3"], group: "PB10"},
        { name: "PB4", x: 600, y: 606.5, functions: ["TIM3_CH1"], group: "PB4"},
        { name: "PB5", x: 600, y: 630, functions: ["IO"], group: "IO"},
        { name: "PB3", x: 600, y: 653.5, functions: ["TIM2_CH2", "T_SWO"], group: "PB3"},
        { name: "PA10(*)/PB8(*)", x: 600, y: 677, functions: []}, // HERE!!!
        { name: "PB14", x: 600, y: 700.5, functions: ["ARD_D1 (DEFAULT)", "STLINK_TX (T_VCP_TX)"], group: "PA14"},
        { name: "PB15", x: 600, y: 724, functions: ["ARD_D0 (DEFAULT)", "STLINK_RX (T_VCP_RX)"], group: "PA15"},

        // CN10 EVEN PINS
        { name: "PC8(*)/PA9(*)", x: 625, y: 301, functions: ["TIM3_CH3", "FMC_NE2/FMC_NCE", "FMC_INT", "FMC_ALE"]}, // HERE!!!
        { name: "PA10(*)", x: 625, y: 324.5, functions: ["TIM1_CH3", "LPUART1_RX", "LPTIM2_IN2", "UCPD1_FRSTX", "USART1_RX", "FDCAN2_TX"]}, // HERE!!!
        { name: "PC5", x: 625, y: 348, functions: ["IO"]},
        { name: "VBUS_STLK", x: 625, y: 371.5, functions: ["VBUS_STLK is the 5 V power from the STLINK-V3EC USB connector. It rises before the 5 V of the STM32H5 Nucleo-64 board."]},
        { name: "NC", x: 625, y: 395, functions: []},
        { name: "PA12", x: 625, y: 418.5, functions: ["PA11 and PA12 are shared with USB signals connected to a USB Type-C® connector. It is not recommended to use them as I/O pins. By default, they are connected to D+/D- signals (SB13 and SB17 ON)."]},
        { name: "PA11", x: 625, y: 442, functions: ["PA11 and PA12 are shared with USB signals connected to a USB Type-C® connector. It is not recommended to use them as I/O pins. By default, they are connected to D+/D- signals (SB13 and SB17 ON)."]},
        { name: "PB12", x: 625, y: 465.5, functions: ["IO"], group: "IO"},
        { name: "", x: 625, y: 489, functions: []},
        { name: "GND", x: 625, y: 512.5, functions: ["Ground"], group: "GND"},
        { name: "PB2", x: 625, y: 536, functions: ["IO"], group: "IO"},
        { name: "PB1(*)", x: 625, y: 559.5, functions: ["IO"], group: "IO"},
        { name: "PB15", x: 625, y: 583, functions: ["ARD_D0 (DEFAULT)", "STLINK_RX (T_VCP_RX)"], group: "PB15"},
        { name: "PB14", x: 625, y: 606.5, functions: ["ARD_D1 (DEFAULT)", "STLINK_TX (T_VCP_TX)"], group: "PB14"},
        { name: "PB13", x: 625, y: 630, functions: ["IO"], group: "IO"},
        { name: "AGND", x: 625, y: 653.5, functions: ["Analog Ground"]},
        { name: "PC4", x: 625, y: 677, functions: []}, // HERE!!! FOR FUNCTIONS
        { name: "PB8", x: 625, y: 700.5, functions: ["IO"], group: "IO"},
        { name: "NC", x: 625, y: 724, functions: []},
    ];

    const pin_info = [

    //Left Group     
      // CN7 ODD PINS
      { name: "PC10", location: left_left_pinout_div, functions: ["IO", "I3C2_SCL" , "SPI3_SCK/I2S3_CK" , "USART3_TX"]}, // HERE!! FOR FUNCTIONS
      { name: "PC12", location: left_left_pinout_div, functions: ["IO", "LPTIM2_CH2", "SPI3_MOSI/I2S3_SDO", "USART3_CK"], group: "IO"},
      { name: "VDD", location: left_left_pinout_div, functions: ["VDD voltage supply"]},
      { name: "BOOT0", location: left_left_pinout_div, functions: ["BOOT0"]},
      { name: "NC", location: left_left_pinout_div, functions: []},
      { name: "NC", location: left_left_pinout_div, functions: []},
      { name: "PA13", location: left_left_pinout_div, functions: ["T_SWDIO"]},
      { name: "PA14", location: left_left_pinout_div, functions: ["T_SWCLK"]},
      { name: "PA15", location: left_left_pinout_div, functions: ["T_JTDI", "TIM2_CH1", "SPI1_NSS/I2S1_WS", "SPI3_NSS/I2S3_WS", "USART1_TX", "FMC_NBL1", "TIM2_ETR"]},
      { name: "GND", location: left_left_pinout_div, functions: ["Ground"], group: "GND"},
      { name: "NC", location: left_left_pinout_div, functions: []},
      { name: "PC13", location: left_left_pinout_div, functions: ["USER button (DEFAULT)", "IO"]},
      { name: "PC14", location: left_left_pinout_div, functions: ["LSE CLK", "IO"]},
      { name: "PC15", location: left_left_pinout_div, functions: ["LSE LCK", "IO"]},
      { name: "PF0", location: left_left_pinout_div, functions: ["HSE CLK", "I", "I3C2_SDA", "I2C2_SDA", "FMC_A0"]},
      { name: "PF1", location: left_left_pinout_div, functions: ["HSE LCK", "O", "I3C2_SCL", "I2C2_SCL", "FMC_A1"]},
      { name: "VBAT", location: left_left_pinout_div, functions: ["Power supply for RTC when VDD is not present"]},
      { name: "PC2", location: left_left_pinout_div, functions: ["IO", "PWR_CSLEEP", "SPI2_MISO/I2S2_SDI"], group: "IO"},
      { name: "PC3", location: left_left_pinout_div, functions: ["IO", "PWR_CSTOP", "LPUART1_TX", "SPI2_MOSI/I2S2_SDO"], group: "IO"},

      // CN7 EVEN PINS
      { name: "PC11", location: left_right_pinout_div, functions: ["IO", "I3C2_SDA", "SPI3_MISO/I2S3_SDI", "USART3_RX"], group: "IO"},
      { name: "PD2", location: left_right_pinout_div, functions: ["USB_FS_OVCR", "TIM3_ETR"]},
      { name: "E5V", location: left_right_pinout_div, functions: ["External 5 volt power at 500mA"]},
      { name: "GND", location: left_right_pinout_div, functions: ["Ground"], group: "GND"},
      { name: "NC", location: left_right_pinout_div, functions: []},
      { name: "IOREF", location: left_right_pinout_div, functions: []},
      { name: "NRST", location: left_right_pinout_div, functions: ["STM32H5 RESET"], group: "NRST"},
      { name: "3V3", location: left_right_pinout_div, functions: ["3V3 output (3V-3.6V, max 1.3A)"], group: "3V3"},
      { name: "5V", location: left_right_pinout_div, functions: ["ADC1_INP0 (DEFAULT)", "User button"]},
      { name: "GND", location: left_right_pinout_div, functions: ["Ground"], group: "GND"},
      { name: "GND", location: left_right_pinout_div, functions: ["Ground"], group: "GND"},
      { name: "VIN", location: left_right_pinout_div, functions: ["Power Input (7V = 800mA, (7V, 9V) = 450mA, [9V, 12V] = 250mA)"], group: "VIN"},
      { name: "NC", location: left_right_pinout_div, functions: []},
      { name: "PA0", location: left_right_pinout_div, functions: ["ADC1_INP0 (DEFAULT)", "User button", "TIM2_CH1", "SPI3_RDY", "USART2_CTS/USART2_NSS", "FDCAN2_RX", "TIM2_ETR"]},
      { name: "PA1", location: left_right_pinout_div, functions: ["ADC1_INP1", "TIM2_CH2", "LPTIM1_IN1", "USART2_RTS"], group: "PA1"},
      { name: "PA2(*) /PB1(*)", location: left_right_pinout_div, functions: ["TIM2_CH3", "LPUART1_TX", "LPTIM1_IN2", "USART2_TX"]}, // HERE!!!
      { name: "PB0", location: left_right_pinout_div, functions: ["ADC1_INP9", "TIM1_CH2N", "TIM3_CH3", "SPI3_MISO/I2S3_SDI", "USART2_TX"], group: "PB0"},
      { name: "PC1(DEFAULT)/PB7", location: left_right_pinout_div, functions: ["ADC1_INP11 (PC1)", "I2C1_SDA (PB7)", "SPI2_MOSI/I2S2_SDO"], group: "PC1"},
      { name: "PC0(DEFAULT)/PB6", location: left_right_pinout_div, functions: ["ADC1_INP10 (PC0)", "ADC1_INP10(PB6)", "SPI2_RDY", "FMC_A25"], group: "PC0"},

      // CN10 ODD PINS
      { name: "NC", location: right_left_pinout_div, functions: []},
      { name: "PB6", location: right_left_pinout_div, functions: ["I2C1_SCL", "I3C1_SCL"], group: "PB6"},
      { name: "PB7", location: right_left_pinout_div, functions: ["I2C1_SDA", "I3C1_SDA"], group: "PB7"},
      { name: "AVDD", location: right_left_pinout_div, functions: ["AVDD is connected to VDD_MCU by default (R33 fitted)."], group: "AVDD"},
      { name: "GND", location: right_left_pinout_div, functions: ["Ground"], group: "GND"},
      { name: "PA5", location: right_left_pinout_div, functions: ["SPI1_SCK"], group: "PA5"},
      { name: "PA6", location: right_left_pinout_div, functions: ["SPI1_MISO"], group: "PA6"},
      { name: "PA7", location: right_left_pinout_div, functions: ["SPI1_MOSI", "TIM3_CH2"], group: "PA7"},
      { name: "PC9", location: right_left_pinout_div, functions: ["SPIx_CS", "TIM3_CH4"], group: "PC9"},
      { name: "PC6", location: right_left_pinout_div, functions: ["TIM3_CH1"], group: "PC6"},
      { name: "PC7", location: right_left_pinout_div, functions: ["IO"], group: "IO"},
      { name: "PA8", location: right_left_pinout_div, functions: ["IO"], group: "IO"},
      { name: "PB10", location: right_left_pinout_div, functions: ["TIM2_CH3"], group: "PB10"},
      { name: "PB4", location: right_left_pinout_div, functions: ["TIM3_CH1"], group: "PB4"},
      { name: "PB5", location: right_left_pinout_div, functions: ["IO"], group: "IO"},
      { name: "PB3", location: right_left_pinout_div, functions: ["TIM2_CH2", "T_SWO"], group: "PB3"},
      { name: "PA10(*)/PB8(*)", location: right_left_pinout_div, functions: []}, // HERE!!!
      { name: "PB14", location: right_left_pinout_div, functions: ["ARD_D1 (DEFAULT)", "STLINK_TX (T_VCP_TX)"], group: "PA14"},
      { name: "PB15", location: right_left_pinout_div, functions: ["ARD_D0 (DEFAULT)", "STLINK_RX (T_VCP_RX)"], group: "PA15"},

      // CN10 EVEN PINS
      { name: "PC8(*)/PA9(*)", location: right_right_pinout_div, functions: ["TIM3_CH3", "FMC_NE2/FMC_NCE", "FMC_INT", "FMC_ALE"]}, // HERE!!!
      { name: "PA10(*)", location: right_right_pinout_div, functions: ["TIM1_CH3", "LPUART1_RX", "LPTIM2_IN2", "UCPD1_FRSTX", "USART1_RX", "FDCAN2_TX"]}, // HERE!!!
      { name: "PC5", location: right_right_pinout_div, functions: ["IO"]},
      { name: "VBUS_STLK", location: right_right_pinout_div, functions: ["VBUS_STLK is the 5 V power from the STLINK-V3EC USB connector. It rises before the 5 V of the STM32H5 Nucleo-64 board."]},
      { name: "NC", location: right_right_pinout_div, functions: []},
      { name: "PA12", location: right_right_pinout_div, functions: ["PA11 and PA12 are shared with USB signals connected to a USB Type-C® connector. It is not recommended to use them as I/O pins. By default, they are connected to D+/D- signals (SB13 and SB17 ON)."]},
      { name: "PA11", location: right_right_pinout_div, functions: ["PA11 and PA12 are shared with USB signals connected to a USB Type-C® connector. It is not recommended to use them as I/O pins. By default, they are connected to D+/D- signals (SB13 and SB17 ON)."]},
      { name: "PB12", location: right_right_pinout_div, functions: ["IO"], group: "IO"},
      { name: "NC", location: right_right_pinout_div, functions: []},
      { name: "GND", location: right_right_pinout_div, functions: ["Ground"], group: "GND"},
      { name: "PB2", location: right_right_pinout_div, functions: ["IO"], group: "IO"},
      { name: "PB1(*)", location: right_right_pinout_div, functions: ["IO"], group: "IO"},
      { name: "PB15", location: right_right_pinout_div, functions: ["ARD_D0 (DEFAULT)", "STLINK_RX (T_VCP_RX)"], group: "PB15"},
      { name: "PB14", location: right_right_pinout_div, functions: ["ARD_D1 (DEFAULT)", "STLINK_TX (T_VCP_TX)"], group: "PB14"},
      { name: "PB13", location: right_right_pinout_div, functions: ["IO"], group: "IO"},
      { name: "AGND", location: right_right_pinout_div, functions: ["Analog Ground"]},
      { name: "PC4", location: right_right_pinout_div, functions: []}, // HERE!!! FOR FUNCTIONS
      { name: "PB8", location: right_right_pinout_div, functions: ["IO"], group: "IO"},
      { name: "NC", location: right_right_pinout_div, functions: []},
    ];

    const pin_to_info = new Map();

    // Pin Button Info
    const pinInfoEls = pin_info.map(pin => {

      // Creates and adds each function for the pin
      const divLoc = document.getElementById(pin.location);
      const el = document.createElement("div");

      if(!pin_to_info.has(pin.name)) {
        pin_to_info.set(pin.name, [el]);
      } else {
        pin_to_info.get(pin.name).push(el);
      }

      pin.functions.forEach((element, index, array) => {
        const pinFunc = document.createElement("button");
        pinFunc.classList.add('pin-element');
        pinFunc.textContent = element;
        el.appendChild(pinFunc);
      });

      // Creates and adds a tooltip about that specific pin
      if(pin.hasOwnProperty("notes")) {
        var noteTxt = "";
        pin.functions.forEach((element, index, array) => {
          noteTxt += element;
        });
        const noteEl = document.createElement("span");
        noteEl.textContent = noteTxt;
        noteEl.classList.add('tooltiptext');
        el.classList.add('tooltip');
        el.appendChild(noteEl);
      }

      el.addEventListener("mouseenter", () => {
          highlightGroup(pin);
      });

      el.addEventListener("mouseleave", () => {
          clearGroupHighlight();
      });

      el.classList.add('pin-info');
      divLoc.appendChild(el);
      return { el, pin };
    });

    const wrapper = document.getElementById("board-wrapper");
    const tooltip = document.getElementById("tooltip");
    const searchInput = document.getElementById("search");
    const showAllBtn = document.getElementById("showAllBtn");
    const matchCount = document.getElementById("matchCount");

    // Create a marker element for each pin
    const markerEls = pins.map(pin => {
      const boardDiv = document.getElementById("board-wrapper");
      const el = document.createElement("div");

      if(!pin_to_info.has(pin.name)) {
        pin_to_info.set(pin.name, [el]);
      } else {
        pin_to_info.get(pin.name).push(el);
      }

      boardDiv.appendChild(el);
      el.className = "pin-marker";
      el.style.left = pin.x + "px";
      el.style.top = pin.y + "px";
      el.dataset.name = pin.name.toLowerCase();

    el.addEventListener("mouseenter", () => {
        // showTooltip(pin);
        highlightGroup(pin);
    });

    // el.addEventListener("mousemove", (e) => positionTooltip(e));
    el.addEventListener("mouseleave", () => {
        // hideTooltip();
        clearGroupHighlight();
    });

      wrapper.appendChild(el);
      return { el, pin };
    });

    // function showTooltip(pin) {
    //   const groupNote = pin.group
    //     ? `<div style="opacity:0.7; font-size:0.75rem; margin-top:0.25rem;">connected to ${pins.filter(p => p.group === pin.group).length - 1} other ${pin.group} pin(s)</div>`
    //     : "";
    //   tooltip.innerHTML = `
    //     <div class="pin-name">${pin.name}</div>
    //     <ul>${pin.functions.map(f => `<li>${f}</li>`).join("")}</ul>
    //     ${groupNote}
    //   `;
    //   tooltip.style.display = "block";
    // }

    // function positionTooltip(e) {
    //   const rect = wrapper.getBoundingClientRect();
    //   tooltip.style.left = (e.clientX - rect.left + 15) + "px";
    //   tooltip.style.top = (e.clientY - rect.top + 15) + "px";
    // }

    // function hideTooltip() {
    //   tooltip.style.display = "none";
    // }

    let current_highlighted = [];

    function highlightGroup(hoveredPin) {
      if(!pin_to_info.has(hoveredPin.name)) return;

      pin_to_info.get(hoveredPin.name).forEach(pin => {
          console.log(pin);
          pin.classList.add("group-highlight");
          current_highlighted.push(pin);
      });
    }
 
    function clearGroupHighlight() {
      current_highlighted.forEach((el) => el.classList.remove("group-highlight"));
    }




    // Search: highlight matches, dim non-matches
    function runSearch() {
      const query = searchInput.value.trim().toLowerCase();
      let matches = 0;

      pinInfoEls.forEach(({ el }) => {
        if (query === "") {
          el.classList.remove("highlight", "dimmed");
          return;
        }
        const isMatch = el.dataset.name.includes(query); //|| el.dataset.functions.includes(query);
        el.classList.toggle("highlight", isMatch);
        el.classList.toggle("dimmed", !isMatch);
        if (isMatch) matches++;
        console.log("Added for " + el.name);
      });

      matchCount.textContent = query === "" ? "" : `${matches} match${matches === 1 ? "" : "es"}`;
    }

    searchInput.addEventListener("input", runSearch);

    showAllBtn.addEventListener("click", () => {
      searchInput.value = "";
      runSearch();
    });