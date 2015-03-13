__author__ = "Michał Kuśmierczyk (kusm@protonmail.ch)"
__date__ = "29.01.15"
__license__ = "Python"

scales = ("C", "F", "K", "R", "DE", "N", "RE", "RO")


def convert_temp(temp, from_scale, to_scale):
    """Convert temperature to a different scale

    possible scale inputs:
    "C" for Celsius
    "F" for Fahrenheit
    "K" for Kelvin
    "R" for Rankine
    "De" for Delisie
    "N" for Newton
    "Re" for Réaumur
    "Ro" for Rømer
    :return converted temp value"""
    try:
        temp = float(temp)
    except ValueError:
        return "ValueError: Invalid temperature input. Must be a number."

    from_scale = from_scale.upper()
    to_scale = to_scale.upper()
    if (from_scale not in scales) or (to_scale not in scales):
        return 'Invalid scale input. Valid inputs: "C", "F", "K", "R", "De", ' \
               '"N", "Re", "Ro".'
    if from_scale == to_scale:
        return temp

    if not from_scale == scales[0]:
        temp = convert_to_c(temp, from_scale)
    if not to_scale == scales[0]:
        temp = convert_from_c(temp, to_scale)

    return temp


def convert_from_c(temp, scale):
    """Convert temperature from Celsius to a different scale"""
    conversion_from_c = {
        scales[1]: temp * (9 / 5) + 32,
        scales[2]: temp + 273.15,
        scales[3]: (temp + 273.15) * (9 / 5),
        scales[4]: (100 - temp) * 3 / 2,
        scales[5]: temp * 33 / 100,
        scales[6]: temp * 4 / 5,
        scales[7]: temp * 21 / 40 + 7.5,
    }
    return conversion_from_c[scale]


def convert_to_c(temp, scale):
    """Convert temperature to Celsius from a different scale"""
    conversion_to_c = {
        scales[1]: (temp - 32) * (5 / 9),
        scales[2]: temp - 273.15,
        scales[3]: (temp - 491.67) * (5 / 9),
        scales[4]: 100 - temp * 2 / 3,
        scales[5]: temp * 100 / 33,
        scales[6]: temp * 5 / 4,
        scales[7]: (temp - 7.5) * 40 / 21,
    }
    return conversion_to_c[scale]

if __name__ == "__main__":
    from_scale = input("In what scale is your temperature? "
                       "C, F, K, R, De, N, Re or Ro  >")
    to_scale = input("In what scale do you want your temperature to be? "
                     "C, F, K, R, De, N, Re or Ro  >")
    temp = input("Temperature in %s  >" % from_scale)
    print(convert_temp(temp, from_scale, to_scale))