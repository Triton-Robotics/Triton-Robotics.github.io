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
      { name: "PC10", x: 30, y: 303},
      { name: "PC12", x: 30, y: 326.5},
      { name: "VDD", x: 30, y: 350},
      { name: "BOOT0", x: 30, y: 373.5},
      { name: "NC", x: 30, y: 397},
      { name: "NC", x: 30, y: 420.5},
      { name: "PA13", x: 30, y: 444},
      { name: "PA14", x: 30, y: 467.5},
      { name: "PA15", x: 30, y: 491},
      { name: "GND", x: 30, y: 514.5},
      { name: "NC", x: 30, y: 538},
      { name: "PC13", x: 30, y: 561.5},
      { name: "PC14", x: 30, y: 585},
      { name: "PC15", x: 30, y: 608.5},
      { name: "PF0", x: 30, y: 632},
      { name: "PF1", x: 30, y: 655.5},
      { name: "VBAT", x: 30, y: 679},
      { name: "PC2", x: 30, y: 702.5},
      { name: "PC3", x: 30, y: 726},

      // CN7 EVEN PINS
      { name: "PC11",   x: 54, y: 303},
      { name: "PD2", x: 54, y: 326.5},
      { name: "E5V", x: 54, y: 350},
      { name: "GND", x: 54, y: 373.5},
      { name: "NC", x: 54, y: 397},
      { name: "IOREF", x: 54, y: 420.5},
      { name: "NRST", x: 54, y: 444},
      { name: "3V3", x: 54, y: 467.5},
      { name: "5V", x: 54, y: 491},
      { name: "GND", x: 54, y: 514.5},
      { name: "GND", x: 54, y: 538},
      { name: "VIN", x: 54, y: 561.5},
      { name: "NC", x: 54, y: 585},
      { name: "PA0", x: 54, y: 608.5},
      { name: "PA1", x: 54, y: 632},
      { name: "NC", x: 54, y: 655.5},
      { name: "PB0", x: 54, y: 679},
      { name: "PC1", x: 54, y: 702.5},
      { name: "PC0", x: 54, y: 726},
      
      // CN6 POWER
      { name: "NC", x: 100, y: 397},
      { name: "IOREF", x: 100, y: 420.5},
      { name: "NRST", x: 100, y: 444},
      { name: "3V3", x: 100, y: 467.5},
      { name: "5V", x: 100, y: 491},
      { name: "GND", x: 100, y: 514.5},
      { name: "GND", x: 100, y: 538},
      { name: "VIN", x: 100, y: 561.5},
      
      // CN8 ANALOG
      { name: "PA0", x: 100, y: 611},
      { name: "PA1", x: 100, y: 634.5},
      { name: "NC", x: 100, y: 658},
      { name: "PB0", x: 100, y: 681.5},
      { name: "PC1", x: 100, y: 705},
      { name: "PC0", x: 100, y: 728.5},

    // Right Group

        // CN5 DIGITAL
        { name: "PB6", x: 553, y: 310},
        { name: "PB7", x: 553, y: 333.5},
        { name: "NC", x: 553, y: 357},
        { name: "NC", x: 553, y: 380.5},
        { name: "PA5", x: 553, y: 404},
        { name: "PA6", x: 553, y: 427.5},
        { name: "PA7", x: 553, y: 451},
        { name: "PC9", x: 553, y: 474.5},
        { name: "PC6", x: 553, y: 498},
        { name: "PC7", x: 553, y: 521.5},

        // CN9 DIGITAL
        { name: "PA8", x: 553, y: 562},
        { name: "PB10", x: 553, y: 585.5},
        { name: "PB4", x: 553, y: 609},
        { name: "PB5", x: 553, y: 632.5},
        { name: "PB3", x: 553, y: 656},
        { name: "NC", x: 553, y: 679.5},
        { name: "PB14", x: 553, y: 705},  
        { name: "PB15", x: 553, y: 730},


        // CN10 ODD PINS
        { name: "NC", x: 600, y: 301},
        { name: "PB6", x: 600, y: 324.5},
        { name: "PB7", x: 600, y: 348},
        { name: "AVDD", x: 600, y: 371.5},
        { name: "GND", x: 600, y: 395},
        { name: "PA5", x: 600, y: 418.5},
        { name: "PA6", x: 600, y: 442},
        { name: "PA7", x: 600, y: 465.5},
        { name: "PC9", x: 600, y: 489},
        { name: "PC6", x: 600, y: 512.5},
        { name: "PC7", x: 600, y: 536},
        { name: "PA8", x: 600, y: 559.5},
        { name: "PB10", x: 600, y: 583},
        { name: "PB4", x: 600, y: 606.5},
        { name: "PB5", x: 600, y: 630},
        { name: "PB3", x: 600, y: 653.5},
        { name: "NC", x: 600, y: 677},
        { name: "PB14", x: 600, y: 700.5},
        { name: "PB15", x: 600, y: 724},

        // CN10 EVEN PINS
        { name: "NC", x: 625, y: 301},
        { name: "NC", x: 625, y: 324.5},
        { name: "PC5", x: 625, y: 348},
        { name: "VBUS_STLK", x: 625, y: 371.5},
        { name: "NC", x: 625, y: 395},
        { name: "PA12", x: 625, y: 418.5},
        { name: "PA11", x: 625, y: 442},
        { name: "PB12", x: 625, y: 465.5},
        { name: "NC", x: 625, y: 489},
        { name: "GND", x: 625, y: 512.5},
        { name: "PB2", x: 625, y: 536},
        { name: "NC", x: 625, y: 559.5},
        { name: "PB15", x: 625, y: 583},
        { name: "PB14", x: 625, y: 606.5},
        { name: "PB13", x: 625, y: 630},
        { name: "AGND", x: 625, y: 653.5},
        { name: "PC4", x: 625, y: 677},
        { name: "PB8", x: 625, y: 700.5},
        { name: "NC", x: 625, y: 724},
    ];

    const pin_info = [

    //Left Group     
      // CN7 ODD PINS
      { name: "PC10", location: left_left_pinout_div, functions: ["I3C2SCL", "SPI3SCK", "I2S3CK", "USART3TX", "OCTOSPI1_IO1", "SDMMC1_D2", "DCMI_D8", "PSSI_D8"]},
      { name: "PC12", location: left_left_pinout_div, functions: ["IO", "TRACED3", "TIM15CH1", "LPTIM2CH2", "SPI3MOSI", "I2S3SDO", "USART3CK", "UART5TX", "SDMMC1_CK", "DCMI_D9", "PSSI_D9"]},
      { name: "VDD", location: left_left_pinout_div, functions: []},
      { name: "BOOT0", location: left_left_pinout_div, functions: [], notes: ["BOOT0 is set to ‘0’ by default. It can be set to ‘1’ with a jumper plugged between pin 5 (VDD) and pin 7 (BOOT0) of CN7."]},
      { name: "NC", location: left_left_pinout_div, functions: []},
      { name: "NC", location: left_left_pinout_div, functions: []},
      { name: "PA13", location: left_left_pinout_div, functions: ["JTMS", "SWDIO"], "notes": ["After reset, these pins are configured as JTAG/SW debug alternate functions. The internal pull-up on PA15, PA13, PB4 pins and the internal pull-down on PA14 pin are activated too."]},
      { name: "PA14", location: left_left_pinout_div, functions: ["JTCK", "SWCLK"], "notes": ["After reset, these pins are configured as JTAG/SW debug alternate functions. The internal pull-up on PA15, PA13, PB4 pins and the internal pull-down on PA14 pin are activated too"]},
      { name: "PA15", location: left_left_pinout_div, functions: ["JTDI", "TIM2CH1", "HDMIEC", "SPI1NSS", "I2S1WS", "SPI3NSS", "I2S3WS", "USART1TX", "UART4RTS", "UART4DE", "OCTOSPI1_NCS", "FMCNBL1", "DCMI_D11", "PSSI_D11", "TIM2ETR"], "notes": ["After reset, these pins are configured as JTAG/SW debug alternate functions. The internal pull-up on PA15, PA13, PB4 pins and the internal pull-down on PA14 pin are activated too."]},
      { name: "GND", location: left_left_pinout_div, functions: []},
      { name: "NC", location: left_left_pinout_div, functions: []},
      { name: "PC13", location: left_left_pinout_div, functions: ["USER button", "IO"], "notes": ["As input, only PC13, PA0, PA1, and PA2 are functional in Standby and VBAT modes. As output, only PC13 and and PA1 are functional in Standby and VBAT modes"]},
      { name: "PC14", location: left_left_pinout_div, functions: ["LSE CLK", "IO"]},
      { name: "PC15", location: left_left_pinout_div, functions: ["LSE LCK", "IO"]},
      { name: "PF0", location: left_left_pinout_div, functions: ["I3C2_SDA", "I2C2_SDA", "FMC_A0", "HSE CLK", "I"]},
      { name: "PF1", location: left_left_pinout_div, functions: ["I3C2_SCL", "I2C2_SCL", "FMC_A1", "HSE LCK", "O"]},
      { name: "VBAT", location: left_left_pinout_div, functions: [], notes: ["Power supply for RTC when VDD is not present"]},
      { name: "PC2", location: left_left_pinout_div, functions: ["PWR_CSLEEP", "TIM4_CH4", "SPI2_MISO", "I2S2_SDI", "OCTOSPI1_IO5", "OCTOSPI1_IO2", "IO"]},
      { name: "PC3", location: left_left_pinout_div, functions: ["PWR_CSTOP", "LPUART1_TX", "SPI2_MOSI", "I2S2_SDO", "OCTOSPI1_IO6", "OCTOSPI1_IO0", "IO"]},

      // CN7 EVEN PINS
      { name: "PC11", location: left_right_pinout_div, functions: ["I3C2_SDA", "SPI3_MISO", "I2S3_SDI", "USART3_RX", "UART4_RX", "OCTOSPI1_NCS", "SDMMC1_D3", "DCMI_D4", "PSSI_D4", "IO"]},
      { name: "PD2", location: left_right_pinout_div, functions: ["TRACED2", "TIM3_ETR", "TIM15_BKIN", "UART5_RX", "SDMMC1_CMD", "DCMI_D11", "PSSI_D11", "USB_FS_OVCR"]},
      { name: "E5V", location: left_right_pinout_div, functions: [], notes: ["5 V, 500 mA maximum"]},
      { name: "GND", location: left_right_pinout_div, functions: []},
      { name: "NC", location: left_right_pinout_div, functions: []},
      { name: "IOREF", location: left_right_pinout_div, functions: []},
      { name: "NRST", location: left_right_pinout_div, functions: []},
      { name: "3V3", location: left_right_pinout_div, functions: [], notes: ["3V3 output (3V-3.6V, max 1.3A)"]},
      { name: "5V", location: left_right_pinout_div, functions: []},
      { name: "GND", location: left_right_pinout_div, functions: []},
      { name: "GND", location: left_right_pinout_div, functions: []},
      { name: "VIN", location: left_right_pinout_div, functions: [], notes: ["Power Input (7V = 800mA, (7V, 9V) = 450mA, [9V, 12V] = 250mA)"]},
      { name: "NC", location: left_right_pinout_div, functions: []},
      { name: "PA0", location: left_right_pinout_div, functions: ["TIM2_CH1", "TIM5_CH1", "TIM8_ETR", "TIM15_BKIN", "SPI4_SCK", "SPI3_RDY", "USART2_CTS", "USART2_NSS", "UART4_TX", "FDCAN2_RX", "TIM2_ETR", "ADC1_INP0", "User button"], notes: ["As input, only PC13, PA0, PA1, and PA2 are functional in Standby and VBAT modes. As output, only PC13 and and PA1 are functional in Standby and VBAT modes."]},
      { name: "PA1", location: left_right_pinout_div, functions: ["TIM2_CH2", "TIM5_CH2", "TIM15_CH1N", "LPTIM1_IN1", "OCTOSPI1_DQS", "USART2_RTS", "USART2_DE", "UART4_RX", "OCTOSPI1_IO3", "USART6_CK", "ADC1_INP1"], notes: ["As input, only PC13, PA0, PA1, and PA2 are functional in Standby and VBAT modes. As output, only PC13 and and PA1 are functional in Standby and VBAT modes."]},
      { name: "NC", location: left_right_pinout_div, functions: []},
      { name: "PB0", location: left_right_pinout_div, functions: ["TIM1_CH2N", "TIM3_CH3", "TIM8_CH2N", "SPI3_MISO", "I2S3_SDI", "OCTOSPI1_IO1", "USART2_TX", "UART4_CTS", "ADC1_INP9"]},
      { name: "PC1", location: left_right_pinout_div, functions: ["TRACED0", "SPI2_MOSI", "I2S2_SDO", "SPI4_MOSI", "OCTOSPI1_IO4", "ADC1_INP11"]},
      { name: "PC0", location: left_right_pinout_div, functions: ["SPI4_MISO", "SPI2_RDY", "FMC_A25", "OCTOSPI1_IO7", "ADC1_INP10"]},

      // CN10 ODD PINS
      { name: "NC", location: right_left_pinout_div, functions: []},
      { name: "PB6", location: right_left_pinout_div, functions: ["TIM4_CH1", "I3C1_SCL", "I2C1_SCL", "HDMI_CEC", "USART6_RX", "USART1_TX", "LPUART1_TX", "FDCAN2_TX", "OCTOSPI1_NCS", "DCMI_D5", "PSSI_D5", "UART5_TX"]},
      { name: "PB7", location: right_left_pinout_div, functions: ["TIM4_CH2", "I3C1_SDA", "I2C1_SDA", "SPI4_MISO", "USART6_CTS", "USART6_NSS", "USART1_RX", "LPUART1_RX", "FDCAN1_TX", "FMC_NL", "DCMI_VSYNC", "PSSI_RDY"]},
      { name: "AVDD", location: right_left_pinout_div, functions: [], notes: ["AVDD is connected to VDD_MCU by default (R33 fitted)."]},
      { name: "GND", location: right_left_pinout_div, functions: []},
      { name: "PA5", location: right_left_pinout_div, functions: ["TIM2_CH1", "TIM8_CH1N", "SPI1_SCK", "I2S1_CK", "PSSI_D14", "TIM2_ETR"], notes: ["To light LD2, a high logic state '1' must be written into the corresponding GPIO PA5/D13. A transistor is used to drive the LD2"]},
      { name: "PA6", location: right_left_pinout_div, functions: ["TIM1_BKIN", "TIM3_CH1", "TIM8_BKIN", "SPI1_MISO", "I2S1_SDI", "OCTOSPI1_IO3", "DCMI_PIXCLK", "PSSI_PDCK"]},
      { name: "PA7", location: right_left_pinout_div, functions: ["TIM1_CH1N", "TIM3_CH2", "TIM8_CH1N", "SPI1_MOSI", "I2S1_SDO", "OCTOSPI1_IO2", "FMC_NWE"]},
      { name: "PC9", location: right_left_pinout_div, functions: ["MCO2", "TIM3_CH4", "TIM8_CH4", "I2C3_SDA", "AUDIOCLK", "UART5_CTS", "OCTOSPI1_IO0", "FMC_CLE", "SDMMC1_D1", "DCMI_D3", "PSSI_D3", "SPIx_CS"]},
      { name: "PC6", location: right_left_pinout_div, functions: ["TIM3_CH1", "TIM8_CH1", "I2S2_MCK", "USART6_TX", "SDMMC1_D0DIR", "FMC_NWAIT", "I3C2_SCL", "OCTOSPI1_IO5", "SDMMC1_D6", "DCMI_D0", "PSSI_D0"]},
      { name: "PC7", location: right_left_pinout_div, functions: ["TRGIO", "TIM3_CH2", "TIM8_CH2", "I2S3_MCK", "USART6_RX", "SDMMC1_D123DIR", "FMC_NE1", "I3C2_SDA", "OCTOSPI1_IO6", "SDMMC1_D7", "DCMI_D1", "PSSI_D1", "IO"]},
      { name: "PA8", location: right_left_pinout_div, functions: ["MCO1", "TIM1_CH1", "TIM8_BKIN2", "I2C3_SCL", "SPI1_RDY", "SPI4_MOSI", "USART1_CK", "I3C2_SCL", "USB_SOF", "FMC_NOE", "DCMI_D3", "PSSI_D3", "IO"]},
      { name: "PB10", location: right_left_pinout_div, functions: ["TIM2_CH3", "TIM8_CH1", "LPTIM2_IN1", "I2C2_SCL", "SPI2_SCK", "I2S2_CK", "USART3_TX", "OCTOSPI1_NCS"]},
      { name: "PB4", location: right_left_pinout_div, functions: ["NJTRST", "TIM3_CH1", "OCTOSPI1_CLK", "LPTIM1_CH2", "SPI1_MISO", "I2S1_SDI", "SPI3_MISO", "I2S3_SDI", "SPI2_NSS", "I2S2_WS", 'I2C3_SDA', "I3C2_SDA", "DCMI_D7", "PSSI_D7"], "notes": ["After reset, these pins are configured as JTAG/SW debug alternate functions. The internal pull-up on PA15, PA13, PB4 pins and the internal pull-down on PA14 pin are activated too."]},
      { name: "PB5", location: right_left_pinout_div, functions: ["TIM3_CH2", "OCTOSPI1_NCLK", "I2C1_SMBA", "SPI1_MOSI", "I2S1_SDO", "USART6_TX", "SPI3_MOSI", "I2S3_SDO", "FDCAN2_RX", "I3C2_SCL", "DCMI_D10", "PSSI_D10", "UART5_RX", "IO"],"notes": ["It is recommended that PF10/PB5, PB4/PB5, and PA3/PB5 are in line with crossing specification"]},
      { name: "PB3", location: right_left_pinout_div, functions: ["JTDO", "TRACESWO", "TIM2_CH2", "I3C2_SCL", "I2C2_SDA", "SPI1_SCK", "I2S1_CK", "SPI3_SCK", "I2S3_CK", "LPUART1_TX", "FDCAN2_TX", "CRS_SYNC", "UART5_TX"]},
      { name: "NC", location: right_left_pinout_div, functions: []},
      { name: "PB14", location: right_left_pinout_div, functions: ["TIM1_CH2N", "TIM12_CH1", "TIM8_CH2N", "USART1_TX", "SPI2_MISO", "I2S2_SDI", "USART3_RTS", "USART3_DE", "UART4_RTS", "UART4_DE"]},
      { name: "PB15", location: right_left_pinout_div, functions: ["RTC_REFIN", "TIM1_CH3N", "TIM12_CH2", "TIM8_CH3N", "USART1_RX", "SPI2_MOSI", "I2S2_SDO", "SPI1_MOSI", "I2S1_SDO", "UART4_CTS", "OCTOSPI1_CLK", "DCMI_D2", "PSSI_D2", "UART5_RX"]},

      // CN10 EVEN PINS
      { name: "NC", location: right_right_pinout_div, functions: []},
      { name: "NC", location: right_right_pinout_div, functions: []},
      { name: "PC5", location: right_right_pinout_div, functions: ["TIM1_CH4N", "PSSI_D15", "SPI4_SCK", "OCTOSPI1_DQS", "IO"]},
      { name: "VBUS_STLK", location: right_right_pinout_div, functions: [], notes: ["VBUS_STLK is the 5 V power from the STLINK-V3EC USB connector. It rises before the 5 V of the STM32H5 Nucleo-64 board."]},
      { name: "NC", location: right_right_pinout_div, functions: []},
      { name: "PA12", location: right_right_pinout_div, functions: ["TIM1_ETR", "LPUART1_RTS", "LPUART1_DE", "SPI2_SCK", "I2S2_CK", "UART4_TX", "USART1_RTS", "USART1_DE", "FDCAN1_TX", "USB_DP", "USB_FS_P"], notes: ["PA11 and PA12 are shared with USB signals connected to a USB Type-C® connector. It is not recommended to use them as I/O pins. By default, they are connected to D+/D- signals (SB13 and SB17 ON)."]},
      { name: "PA11", location: right_right_pinout_div, functions: ["TIM1_CH4", "LPUART1_CTS", "SPI2_NSS", "I2S2_WS", "UART4_RX", "USART1_CTS", "USART1_NSS", "FDCAN1_RX", "USB_DM", "USB_FS_N"], notes: ["PA11 and PA12 are shared with USB signals connected to a USB Type-C® connector. It is not recommended to use them as I/O pins. By default, they are connected to D+/D- signals (SB13 and SB17 ON)."]},
      { name: "PB12", location: right_right_pinout_div, functions: ["TIM1_BKIN", "TIM8_CH3", "OCTOSPI1_NCLK", "I2C2_SDA", "SPI2_NSS", "I2S2_WS", "UCPD1_FRSTX", "USART3_CK", "FDCAN2_RX", "UART5_RX", "IO"]},
      { name: "NC", location: right_right_pinout_div, functions: []},
      { name: "GND", location: right_right_pinout_div, functions: []},
      { name: "PB2", location: right_right_pinout_div, functions: ["RTC_OUT2", "TIM8_CH4N", "SPI1_RDY", "LPTIM1_CH1", "SPI2_SCK", "I2S2_CK", "SPI3_MOSI", "I2S3_SDO", "OCTOSPI1_CLK", "OCTOSPI1_DQS", "SDMMC1_CMD", "IO"]},
      { name: "NC", location: right_right_pinout_div, functions: []},
      { name: "PB15", location: right_right_pinout_div, functions: ["RTC_REFIN", "TIM1_CH3N", "TIM12_CH2", "TIM8_CH3N", "USART1_RX", "SPI2_MOSI", "I2S2_SDO", "SPI1_MOSI", "I2S1_SDO", "UART4_CTS", "OCTOSPI1_CLK", "DCMI_D2", "PSSI_D2", "UART5_RX"]},
      { name: "PB14", location: right_right_pinout_div, functions: ["TIM1_CH2N", "TIM12_CH1", "TIM8_CH2N", "USART1_TX", "SPI2_MISO", "I2S2_SDI", "USART3_RTS", "USART3_DE", "UART4_RTS", "UART4_DE"]},
      { name: "PB13", location: right_right_pinout_div, functions: ["TIM1_CH1N", "TIM8_CH2", "LPTIM2_CH1", "I2C2_SMBA", "SPI2_SCK", "I2S2_CK", "USART3_CTS", "USART3_NSS","LPUART1_RX", "FDCAN2_TX", "SDMMC1_D0", "UART5_TX", "IO"]},
      { name: "AGND", location: right_right_pinout_div, functions: []},
      { name: "PC4", location: right_right_pinout_div, functions: ["TIM2_CH4", "LPTIM2_ETR", "I2S1_MCK", "USART3_RX"]},
      { name: "PB8", location: right_right_pinout_div, functions: ["TIM4_CH3", "I3C1_SCL", "I2C1_SCL", "SPI4_RDY", "SPI3_NSS", "I2S3_WS", "SDMMC1_CKIN", "UART4_RX", "FDCAN1_RX", "SDMMC1_D4", "DCMI_D6", "PSSI_D6", "IO"]},
      { name: "NC", location: right_right_pinout_div, functions: []},
    ];

    let tooltip_list = []

    const pin_to_info = new Map();

    // Pin Button Info
    const pinInfoEls = pin_info.map(pin => {

      // Creates and adds each function for the pin
      const divLoc = document.getElementById(pin.location);
      const el = document.createElement("div");

      el.dataset.name = pin.name.toLowerCase();
      el.dataset.functions = pin.functions.join(" ").toLowerCase();

      if(!pin_to_info.has(pin.name.toLowerCase())) {
        pin_to_info.set(pin.name.toLowerCase(), [el]);
      } else {
        pin_to_info.get(pin.name.toLowerCase()).push(el);
      }

      const pinName = document.createElement("button");
      pinName.classList.add('pin-element');
      pinName.textContent = pin.name;
      el.appendChild(pinName);

      pin.functions.forEach((element, index, array) => {
        const pinFunc = document.createElement("button");
        pinFunc.classList.add('pin-element');
        pinFunc.textContent = element;
        el.appendChild(pinFunc);
      });

      // Creates and adds a tooltip about that specific pin
      if(pin.hasOwnProperty("notes")) {
        var noteTxt = "";
        pin.notes.forEach((element, index, array) => {
          noteTxt += element + "\n\n";
        });
        console.log(noteTxt);
        const noteEl = document.createElement("span");
        noteEl.textContent = noteTxt;
        noteEl.classList.add('tooltiptext');
        el.classList.add('tooltip');
        noteEl.classList.add('tooltiptext-hoverable');
        tooltip_list.push(noteEl);
        el.appendChild(noteEl);
      }

      el.addEventListener("mouseenter", () => {
          highlightGroup(pin, true);
      });

      el.addEventListener("click", () => togglePinned(pin));

      el.addEventListener("mouseleave", () => {
          clearGroupHighlight(true);
      });

      el.classList.add('pin-info');
      divLoc.appendChild(el);
      return { el, pin };
    });

    const wrapper = document.getElementById("board-wrapper");
    const tooltip = document.getElementById("tooltip");
    const searchInput = document.getElementById("search");
    const showAllBtn = document.getElementById("showAllBtn");
    const hideTooltipsBtn = document.getElementById("hideTooltipsBtn");
    const matchCount = document.getElementById("matchCount");

    // Create a marker element for each pin
    const markerEls = pins.map(pin => {
      const boardDiv = document.getElementById("board-wrapper");
      const el = document.createElement("div");

      if(!pin_to_info.has(pin.name.toLowerCase())) {
        pin_to_info.set(pin.name.toLowerCase(), [el]);
      } else {
        pin_to_info.get(pin.name.toLowerCase()).push(el);
      }

      boardDiv.appendChild(el);
      el.className = "pin-marker";
      el.style.left = pin.x + "px";
      el.style.top = pin.y + "px";
      el.dataset.name = pin.name.toLowerCase();

    el.addEventListener("mouseenter", () => {
        // showTooltip(pin);
        highlightGroup(pin, true);
    });

    el.addEventListener("click", () => togglePinned(pin));   

    el.addEventListener("mouseleave", () => {
        // hideTooltip();
        clearGroupHighlight(true);
    });

      wrapper.appendChild(el);
      return { el, pin };
    });

    let mouse_current_highlighted = [];
    let search_current_highlighted = [];

    function highlightGroup(hoveredPin, isByMouse) { 
      if(!pin_to_info.has(hoveredPin.name.toLowerCase())) return;

      pin_to_info.get(hoveredPin.name.toLowerCase()).forEach(pin => {
          let name = (isByMouse ? "mouse" : "search")
          pin.classList.add("group-highlight-" + name);
          (isByMouse ? mouse_current_highlighted : search_current_highlighted).push(pin);
          pin.classList.add('visible-' + name);
      });
    }

    const pinnedNames = new Set();

    
    function togglePinned(pin) {
      const key = pin.name.toLowerCase();
      const els = pin_to_info.get(key);
      if (!els) return;

      const nowPinned = !pinnedNames.has(key);
      if (nowPinned) pinnedNames.add(key);
      else pinnedNames.delete(key);

      els.forEach(el => {
        el.classList.toggle("group-highlight-pinned", nowPinned);
        el.classList.toggle("visible-pinned", nowPinned);
      });
    }
 
    function clearGroupHighlight(isByMouse) {
      let name = (isByMouse ? "mouse" : "search");
      (isByMouse ? mouse_current_highlighted : search_current_highlighted).forEach((pin) => {
        pin.classList.remove("group-highlight-" + name);
        pin.classList.remove('visible-' + name);
      });
    }




    // Search: highlight matches, dim non-matches
    function runSearch() {
      const query = searchInput.value.trim().toLowerCase();
      let matches = 0;
      clearGroupHighlight(false);

      pinInfoEls.forEach(({ el, pin }) => {
        if (query === "") {
          el.classList.remove("highlight", "dimmed");
          return;
        }
        if(el.dataset.name.includes(query) || el.dataset.functions.includes(query)) {
          highlightGroup(pin, false);
          matches++;
        }
      });

      matchCount.textContent = query === "" ? "Hi, not searching right now :D" : `${matches} match${matches === 1 ? "" : "es"}`;
    }

    searchInput.addEventListener("input", runSearch);

    showAllBtn.addEventListener("click", () => {
      if(showAllBtn.textContent == "Show All") {
        showAllBtn.textContent = "Hide All";
        pinInfoEls.forEach(({ el, pin }) => {
          el.style.visibility = 'visible';
        });
      } else {
        showAllBtn.textContent = "Show All";
        pinInfoEls.forEach(({ el, pin }) => {
          el.style.visibility = 'hidden';
        });
      }
      runSearch();
    });

    hideTooltipsBtn.addEventListener("click", () => {
      if(hideTooltipsBtn.textContent == "Show Tooltips") {
        hideTooltipsBtn.textContent = "Hide Tooltips";
        tooltip_list.forEach((element, index, array) => {
          element.classList.add('tooltiptext-hoverable');
        });
      } else {
        hideTooltipsBtn.textContent = "Show Tooltips";
        tooltip_list.forEach((element, index, array) => {
          element.classList.remove('tooltiptext-hoverable');
        });
      }
    });



// Runs search when the page loads because the search bar may have cached info
runSearch();