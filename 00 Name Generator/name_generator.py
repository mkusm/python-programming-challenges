__author__ = "Michał Kuśmierczyk (kusm@protonmail.ch)"
__date__ = "29.01.15"
__license__ = "Python"

from random import randint
from names_database import names


def generate_name(gender="r"):
    """Generate male, female or random name

    input gender string: "r" for random, "m" for male, "f" for female
    :return random name string"""
    if gender not in ("r", "m", "f"):
        raise Exception("Invalid input! Valid inputs: 'r', 'm', 'f'.")

    name = names[randint(0, len(names)-1)]
    if gender in ("m", "f"):
        while not name[0] == gender:
            name = names[randint(0, len(names)-1)]
    return name[1:]

if __name__ == "__main__":
    male_name = generate_name("m")
    female_name = generate_name("f")
    random_name = generate_name()
    print("Random male name: %s" % male_name)
    print("Random female name: %s" % female_name)
    print("Random name: %s" % random_name)