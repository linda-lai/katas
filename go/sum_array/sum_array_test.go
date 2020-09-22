package sum_array

import (
	"testing"
)

func TestSumArray(t *testing.T) {
	tests := []struct {
		name string
		numbers []int
		total int
	}{
		{
			"when an array of positive integers is passed",
			[]int{1, 2, 3},
			6,
		},
		{
			"when an array of negative integers is passed",
			[]int{-1, -2, -3},
			-6,
		},
	}

	for _, tt := range tests {
		got := SumArray(tt.numbers)
		if got != tt.total {
			t.Errorf("got %v but expecting %v", got, tt.total)
		}
	}
}
