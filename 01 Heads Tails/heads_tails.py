__author__ = "Michał Kuśmierczyk (kusm@protonmail.ch)"
__date__ = "29.01.15"
__license__ = "Python"

from random import randint


def heads_tails():
    """Throw a coin"""
    return ("Heads", "Tails")[randint(0, 1)]

if __name__ == "__main__":
    print(heads_tails())
