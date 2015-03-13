__author__ = "Michał Kuśmierczyk (kusm@protonmail.ch)"
__date__ = "30.01.15"
__license__ = "Python"


def password_generator(length=10, lower_letters=True, upper_letters=True,
                       numbers=True, special_characters=True):
    if not is_legit(length, lower_letters, upper_letters, numbers,
                    special_characters):
        return "Wrong input!"
    chars = generate_characters(lower_letters, upper_letters,
                                numbers, special_characters)
    return generate_password(length, chars)


def generate_password(length, chars):
    from random import randint

    password = []
    for i in range(length):
        password.append(chars[randint(0, len(chars) - 1)])
    password = "".join(password)
    return password


def generate_characters(lower_letters, upper_letters,
                        numbers, special_characters):
    chars = ""
    if lower_letters:
        chars += "abcdefghijklmnopqrstuvwxyz"
    if upper_letters:
        chars += "abcdefghijklmnopqrstuvwxyz".upper()
    if numbers:
        chars += "123456789"
    if special_characters:
        chars += r"""~`!@#$%^&*()_+-={}[]:"|;'\<>?,./"""
    return chars


def is_legit(length, lower_letters, upper_letters,
             numbers, special_characters):
    return isinstance(length, int) and (lower_letters or upper_letters or
                                        numbers or special_characters)


if __name__ == "__main__":

    while True:
        length = input("How long do you want your password to be? "
                       "(default = 10) ")
        if length == "":
            length = 10
        else:
            length = int(length)

        lower_letters = input("Do you want lower letters? [Y/n] ").upper()
        if lower_letters == "Y" or lower_letters == "":
            lower_letters = True
        else:
            lower_letters = False

        upper_letters = input("Do you want upper letters? [Y/n] ").upper()
        if upper_letters == "Y" or upper_letters == "":
            upper_letters = True
        else:
            upper_letters = False

        numbers = input("Do you want numbers? [Y/n] ").upper()
        if numbers == "Y" or numbers == "":
            numbers = True
        else:
            numbers = False

        special_characters = input("Do you want special characters? [Y/n] ") \
            .upper()
        if special_characters == "Y" or special_characters == "":
            special_characters = True
        else:
            special_characters = False

        print("Your password:")
        print(password_generator(length, lower_letters, upper_letters,
                                 numbers, special_characters))
        again = input("\nAgain? [Y/n]\n").upper()
        if not (again == "Y" or again == ""):
            break