__author__ = "Michał Kuśmierczyk (kusm@protonmail.ch)"
__date__ = "31.01.15"
__license__ = "Python"


def calculate_and_print_100_factorial():
    result = 1
    for i in range(1, 101):
        result *= i
    return result

if __name__ == "__main__":
    print(calculate_and_print_100_factorial())