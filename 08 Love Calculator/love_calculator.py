__author__ = "Michał Kuśmierczyk (kusm@protonmail.ch)"
__date__ = "30.01.15"
__license__ = "Python"


def love_calculator(name1, name2):
    """Calculate a compatibility between two people

    :return string with percentage number"""
    name1 += name2
    name1 = delete_repeating_chars(name1)
    ints_list = convert_chars_to_ascii_ints(name1)
    ints_sum = sum(ints_list)
    result = str(ints_sum % 101) + "%"
    return result


def convert_chars_to_ascii_ints(string):
    ints_list = []
    for char in string:
        ints_list.append(ord(char))
    return ints_list


def delete_repeating_chars(string):
    string_new = []
    for letter in string:
        if letter not in string_new:
            string_new.append(letter)
    string_new = "".join(string_new)
    return string_new

if __name__ == "__main__":
    while True:
        name1 = input("Enter your name: ")
        name2 = input("Enter your crush name: ")
        print(love_calculator(name1, name2))
        again = input("\nWanna play again? [Y/n]").upper()
        if not (again == "Y" or again == ""):
            break