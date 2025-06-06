#temp converter shit
import os

def convert_temperature():
    os.system("cls")
    print("Choose the conversion direction:")
    print("1: Celsius to Fahrenheit")
    print("2: Fahrenheit to Celsius")
    
    choice = input("Enter 1 or 2: ")
    
    if choice == '1':
        os.system("cls")
        celsius = float(input("Enter temperature in Celsius: "))
        fahrenheit = (celsius * 9/5) + 32
        print("")
        print(f"{celsius}°C is equal to {fahrenheit}°F")

    elif choice == '2':
        os.system("cls")
        fahrenheit = float(input("Enter temperature in Fahrenheit: "))
        celsius = (fahrenheit - 32) * 5/9
        print("")
        print(f"{fahrenheit}°F is equal to {celsius}°C")

    else:
        print("Invalid choice. Please enter 1 or 2.")


if __name__ == "__main__":
    convert_temperature()