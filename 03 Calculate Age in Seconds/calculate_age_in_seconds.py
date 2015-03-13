__author__ = "Michał Kuśmierczyk (kusm@protonmail.ch)"
__date__ = "29.01.15"
__license__ = "Python"

def calculate_age_in_seconds(age):
    try:
        years = int(age)
    except ValueError:
        return "ValueError: Invalid input. Age must be a number."
    seconds = 60
    minutes = 60
    hours = 24
    days = 30
    months = 12
    time = seconds * minutes * hours * days * months * years
    return time

if __name__ == "__main__":
    input_age = input("How old are you: ")
    print("You are %s seconds old" % str(calculate_age_in_seconds(input_age)))