package sum_array

/* Write a function that takes an array of numbers and returns the sum of the numbers.
These may be integers or decimals, and the numbers can also be negative. If the array does not contain any numbers it should return 0.
You can assume that you are only given numbers. */

func SumArray(numbers []int) int {
	var total int
	for i := 0; i < len(numbers); i++ {
		total += numbers[i]
	}

	return total
}
